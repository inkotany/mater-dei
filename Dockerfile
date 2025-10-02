# syntax=docker.io/docker/dockerfile:1

# Base Node.js image
FROM node:20-alpine AS base

# Dependencies stage
FROM base AS deps
# Install compatibility libraries for some npm packages
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies using the detected lockfile
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Build stage
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

# Build the Next.js app using the detected lockfile
RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Production stage
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Base Node.js image
FROM node:20-alpine AS base
WORKDIR /app

# --------------------------
# Dependencies stage
# --------------------------
FROM base AS deps
RUN apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy lockfiles and package.json
COPY package.json pnpm-lock.yaml* .npmrc* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# --------------------------
# Build stage
# --------------------------
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build-time environment variables (dummy values)
ARG NEXT_PUBLIC_SANITY_PROJECT_ID=dummy_project
ARG NEXT_PUBLIC_SANITY_DATASET=production

ENV NEXT_PUBLIC_SANITY_PROJECT_ID=$NEXT_PUBLIC_SANITY_PROJECT_ID
ENV NEXT_PUBLIC_SANITY_DATASET=$NEXT_PUBLIC_SANITY_DATASET
ENV NEXT_TELEMETRY_DISABLED=1

# Build Next.js app
RUN pnpm run build

# --------------------------
# Production stage
# --------------------------
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user
RUN addgroup app && adduser -S -G app app

# Copy runtime files
COPY --from=builder /app/public ./public
COPY --from=builder --chown=app:app /app/.next/standalone ./ 
COPY --from=builder --chown=app:app /app/.next/static ./.next/static

USER app

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]


# Create a non-root user for running the app
RUN addgroup app && adduser -S -G app app

# Copy public assets
COPY --from=builder /app/public ./public

# Copy Next.js standalone server and static files
COPY --from=builder --chown=app:app /app/.next/standalone ./
COPY --from=builder --chown=app:app /app/.next/static ./.next/static

USER app

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the Next.js standalone server
CMD ["node", "server.js"]