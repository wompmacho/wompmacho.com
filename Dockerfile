FROM node:lts-alpine AS base
WORKDIR /app

COPY . .
RUN npm install && npm run build && npm ci --production


FROM mhart/alpine-node:slim AS final
WORKDIR /app
COPY --from=base app/static ./static
COPY --from=base app/node_modules ./node_modules
COPY --from=base app/__sapper__/build ./__sapper__/build
ENV PORT=80
EXPOSE 80
CMD ["node", "__sapper__/build"]