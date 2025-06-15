FROM node:slim
WORKDIR /workspace
COPY . .
RUN npm install && npm run build
USER node
EXPOSE 5173
CMD [ "npm", "run", "dev" ]