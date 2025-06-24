FROM node:20-slim
WORKDIR /workspace
COPY --chown=1000:1000 . .
USER 1000:1000
EXPOSE 5173
CMD [ "node" ]