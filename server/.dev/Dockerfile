FROM node:latest

ENV NODE_ENV=development

WORKDIR /var/app

RUN yarn global add nodemon
RUN yarn install

CMD ["nodemon", "--inspect=$NODEMON_DEBUG_PORT"]
