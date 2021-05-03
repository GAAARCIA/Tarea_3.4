
FROM node
MAINTAINER Angélica García

ENV HOME /root
COPY ./app.js ./app.js

EXPOSE 4444

CMD node app.js
