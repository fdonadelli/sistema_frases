FROM node:20.10.0-alpine3.19 as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
RUN chmod -R 777 dist