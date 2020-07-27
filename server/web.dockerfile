FROM node:latest

# Create app directory
WORKDIR /

# Bundle app source
COPY . .

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 3001

CMD ["node", "index.js"]