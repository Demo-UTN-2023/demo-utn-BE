# Use the official Node.js runtime as the base image
FROM node:20.3.1 AS DEV-APP

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port on which your NestJS application will run
EXPOSE $PORT

# Start the NestJS application
CMD ["npm", "run", "start:dev"]
