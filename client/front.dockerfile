FROM node:latest

# Specify the version so builds are (more) reproducible.
RUN npm install --quiet --global @vue/cli

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080