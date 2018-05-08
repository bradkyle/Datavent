# use latest Node LTS (Carbon)
FROM node:6.11.5

EXPOSE 9005
EXPOSE 5000

RUN apt-get update && apt-get install tmux

# install Firebase CLI
RUN npm install -g firebase-tools

WORKDIR /usr/src/app/api

ADD . .
RUN cd functions && npm install

# reset user back to root
USER root