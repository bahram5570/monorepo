FROM node:20-alpine

WORKDIR /app

COPY .env package.json package-lock.json ./
COPY . .

RUN npm ci

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
