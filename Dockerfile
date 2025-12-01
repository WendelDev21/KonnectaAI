# ---------------------------
# BASE IMAGE
# ---------------------------
FROM node:20-alpine AS base
RUN npm install -g pnpm
WORKDIR /app

# ---------------------------
# INSTALL DEPENDENCIES (com cache)
# ---------------------------
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --no-frozen-lockfile

# ---------------------------
# BUILD
# ---------------------------
FROM base AS builder
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN pnpm build

# ---------------------------
# RUNNER
# ---------------------------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Cria usuário sem root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copia arquivos standalone do Next
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
