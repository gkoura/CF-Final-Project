# version Node to use 
FROM node:20

#Directory to save image
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code, excluding files in .dockerignore
COPY . .

# Expose the port the app runs on (e.g., 3000 for many Node.js apps)
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
