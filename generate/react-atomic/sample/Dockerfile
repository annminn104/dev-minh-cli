FROM node:16-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn --ignore-scripts --frozen-lockfile

COPY . .

RUN yarn build

FROM nginx:1.21-alpine

RUN rm -rf /usr/share/nginx/html/* && rm -rf /docker-entrypoint.d/*

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
