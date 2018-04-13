# Development environment dockerfile
# for local development
FROM ubuntu:17.10

ADD . /app
WORKDIR /app
VOLUME /app