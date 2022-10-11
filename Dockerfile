FROM node:latest

WORKDIR /app
ADD . /app

RUN yarn
RUN yarn build

CMD ["yarn", "start"]