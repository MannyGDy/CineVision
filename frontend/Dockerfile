# Stage 1: Build React app
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy source code and build
COPY . .
RUN npm run build

# Stage 2: Nginx for serving static files
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Remove default nginx static files
RUN rm -rf ./*

# Copy build output from builder
COPY --from=builder /app/build .

# Expose port
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
