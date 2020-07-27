FROM node:latest

WORKDIR /

COPY . .

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "build"]