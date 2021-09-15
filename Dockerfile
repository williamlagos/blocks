FROM node:latest

WORKDIR /app
ADD . /app

RUN yarn

CMD ["yarn", "start"]