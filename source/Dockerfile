FROM node:15-alpine as builder
WORKDIR /app
COPY . .
RUN yarn && yarn build
# Stage 2: Start fresh, use Nginx as webserver,
# and copy just the build artifacts from the previous stage.
FROM nginx:alpine
WORKDIR /app
COPY --from=builder /app/build /usr/share/nginx/html
# Run nginx with global directives and daemon off
CMD ["nginx", "-g", "daemon off;"]