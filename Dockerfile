# Use an official Node runtime as the parent image
FROM node:alpine

# Install PNPM globally
RUN npm install -g pnpm

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN pnpm install

# Bundle app source inside Docker image
COPY . .

# Make port 80 available to the world outside this container
EXPOSE 3000

# Run the app when the container launches
CMD ["pnpm", "run", "dev"]