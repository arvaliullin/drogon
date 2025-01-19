FROM oven/bun:latest as frontend-builder

WORKDIR /src

COPY . ./

RUN bun install
RUN bun run build

FROM golang:latest as backend-builder

WORKDIR /src
COPY . ./
RUN go mod download

RUN go build -o /app/glossary github.com/arvaliullin/drogon/cmd/glossary

FROM debian:latest

WORKDIR /app

COPY --from=backend-builder /app/glossary /app/glossary
COPY --from=frontend-builder /src/dist /app/dist

CMD ["/app/glossary"]
