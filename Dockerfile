FROM node:20.11.0-alpine3.19
WORKDIR /app
COPY package*.json .
COPY tsconfig.json .
RUN npm install --only=production
COPY . .
RUN npm run build

FROM node:20.11.0-alpine3.19
WORKDIR /app
COPY package*.json .
RUN npm install --only=production
COPY --from=0 /app/dist .
RUN npm install pm2 -g
EXPOSE 3000
CMD ["pm2-runtime","app.js"]
