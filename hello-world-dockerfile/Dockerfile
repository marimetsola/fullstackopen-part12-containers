FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .

COPY . .

RUN npm ci

ENV DEBUG=express:*

USER node

CMD npm start