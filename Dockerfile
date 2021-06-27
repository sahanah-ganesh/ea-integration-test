# refernce: https://dev.to/dariansampare/setting-up-docker-typescript-node-hot-reloading-code-changes-in-a-running-container-2b2f

# pulls in node image
FROM node:14 as base

# sets working directory for container
WORKDIR /home/node/app

COPY package.json ./

# installs and copies all project code into container
RUN npm i

COPY . .

# extends dev, sets env, builds prod ready typescript code  
FROM base as production

ENV NODE_PATH=./build

RUN npm run build