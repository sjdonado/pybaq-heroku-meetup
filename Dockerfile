FROM buildkite/puppeteer

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install --only=prod

COPY src .

CMD ["npm", "start"]