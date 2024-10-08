FROM golang:latest

RUN apt update && apt upgrade -y
RUN apt install --yes curl unzip bash
RUN apt install --yes python3 python3-pip

ENV BUN_INSTALL="/usr/local"

RUN curl -fsSL https://bun.sh/install | bash

WORKDIR /opt/src

COPY . .

RUN bun install
