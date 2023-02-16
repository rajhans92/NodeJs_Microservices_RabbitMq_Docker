FROM node:alpine
WORKDIR /src
COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["node","server.js"]