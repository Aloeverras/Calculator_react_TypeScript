FROM node:20-bullseye-slim
WORKDIR /workspace
USER 1000:1000
EXPOSE 5173
CMD [ "node" ]