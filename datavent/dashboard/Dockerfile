# use latest Node LTS (Carbon)
FROM node:9.10

EXPOSE 9005
EXPOSE 5000

# install Firebase CLI
RUN npm install -g firebase-tools

WORKDIR /usr/src/app/dashboard

ADD . .
RUN npm install

# reset user back to root
USER root