FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .

COPY . .

RUN npm ci --omit=dev

ENV DEBUG=express:*

USER node

CMD npm start