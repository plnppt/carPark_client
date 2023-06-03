FROM node:latest

ENV FRONTHOME=/home/front
ENV NODE_OPTIONS=--openssl-legacy-provider

RUN mkdir -p $FRONTHOME
WORKDIR /home/front

COPY . .

RUN npm install --legacy-peer-deps
RUN npm run build

ENTRYPOINT ["/home/front/entrypoint.sh"]


