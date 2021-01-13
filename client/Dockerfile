#########################################################
# BASE
#########################################################

FROM node:12-alpine AS base

# Create app directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all the files
COPY . .