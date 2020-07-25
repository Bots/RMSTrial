FROM node:latest

# Specify the version so builds are (more) reproducible.
RUN npm install --quiet --global @vue/cli

RUN mkdir /app
WORKDIR /app

RUN npm install
