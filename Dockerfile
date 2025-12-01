# Basic Image
FROM node:20.19-slim

# Update OS and install lsb-release
RUN apt-get update \
    && apt-get install -y lsb-release

# Install nano, bash and clean all installation files
RUN apt-get install -y nano \
    && apt-get install -y bash \
    && apt-get clean

# Create app directory
RUN mkdir /app

# Set it as working directory
WORKDIR /app

# Copy package.json first for better layer caching
COPY package.json .

# Install all nodejs dependencies
RUN npm install

# Copy all application files
COPY app.js trafficlight.js trafficlight.test.js ./

# Run the application
CMD ["npm", "run", "index"]
