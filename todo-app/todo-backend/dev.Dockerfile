FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .

COPY . .

RUN npm install

ENV DEBUG=express:*

USER node

CMD npm run dev