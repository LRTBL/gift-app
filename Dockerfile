# Name the node stage "builder"
FROM node:12 AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN yarn install && yarn build:production

# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Copy static assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# -- from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]