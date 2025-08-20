# Stage 1: Build dependencies
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Stage 2: Runtime container
FROM node:18-alpine

WORKDIR /app

# Copy node_modules and source code from build stage
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app ./

# Expose React dev server port
EXPOSE 3000

# Start React dev server
CMD ["npm", "start"]
