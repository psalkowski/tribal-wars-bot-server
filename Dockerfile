FROM node:20.9-alpine AS build

WORKDIR /app
COPY . /app

RUN apk add git --no-cache
RUN yarn install && yarn build && cd build && yarn workspaces focus --production

FROM node:20.9-alpine

WORKDIR /app
EXPOSE 3333

COPY --from=build /app/build/ /app

CMD ["/usr/local/bin/node", "bin/server.js"]
