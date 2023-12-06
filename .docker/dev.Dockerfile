FROM node:20.10

ENV TZ=America/Santiago
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN yarn global add @nestjs/cli prisma

WORKDIR /app

CMD yarn start:dev