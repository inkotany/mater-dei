# syntax=docker/dockerfile:1

# Base Node.js image (use Node 20 LTS)
FROM node:20-alpine AS base

# --------------------------
# Dependencies stage
# --------------------------
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy lockfiles and package.json
COPY package.json pnpm-lock.yaml* .npmrc* ./

# Install dependencies based on available lockfile
RUN pnpm install

# --------------------------
# Build stage
# --------------------------
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable telemetry
ENV NEXT_TELEMETRY_DISABLED=1

# Build Next.js app
RUN \
    if [ -f yarn.lock ]; then yarn build; \
    elif [ -f package-lock.json ]; then npm run build; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
    else echo "No lockfile found!" && exit 1; \
    fi

# --------------------------
# Production stage
# --------------------------
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user
RUN addgroup app && adduser -S -G app app

# Copy only necessary files for runtime
COPY --from=builder /app/public ./public
COPY --from=builder --chown=app:app /app/.next/standalone ./
COPY --from=builder --chown=app:app /app/.next/static ./.next/static

USER app

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
