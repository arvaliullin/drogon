FROM golang:latest

RUN apt update && apt upgrade -y
RUN apt install --yes curl unzip bash

ENV BUN_INSTALL="/usr/local"

RUN curl -fsSL https://bun.sh/install | bash
