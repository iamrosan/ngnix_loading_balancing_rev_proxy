FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
COPY ./public ./public
COPY index.html .
COPY server.js .

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]