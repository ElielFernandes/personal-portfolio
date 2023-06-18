FROM node:17-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
COPY nginx/config/nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf ./*
COPY --from=builder /app/dist .
ENTRYPOINT [ "nginx", "-g", "daemon off;"]