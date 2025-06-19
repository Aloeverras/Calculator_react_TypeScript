FROM node:slim AS builder
ARG WORKSPACEVOLUME
RUN mkdir -p /app
COPY . /app

FROM node:slim
ARG PORT
COPY --from=builder /app /workspace
WORKDIR /workspace
USER node
EXPOSE ${PORT}
CMD [ "node" ]