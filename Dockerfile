# Use the official Node.js image as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Install electron globally
RUN npm install -g electron --unsafe-perm=true --allow-root

# Run the app
CMD ["electron", "."]
