FROM node:slim AS builder
ARG WORKSPACEVOLUME
RUN mkdir -p /app
COPY . /app

FROM node:slim
ARG PORT
COPY --from=builder /app /workspace
WORKDIR /workspace
RUN npm install npm@latest
USER node
EXPOSE ${PORT}
CMD [ "node" ]