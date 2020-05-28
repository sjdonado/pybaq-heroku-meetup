FROM buildkite/puppeteer

EXPOSE 3000

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY package.json .

RUN npm install --only=prod

COPY ./src ./src

CMD ["npm", "start"]