FROM node

RUN mkdir app
WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

EXPOSE 80
CMD [ "npm", "start" ]
