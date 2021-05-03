
FROM node
MAINTAINER Angélica García

ENV HOME /root
COPY ./app.js ./app.js
COPY ./sincrono.js ./sincrono.js
COPY ./asincrono.js ./asincrono.js
COPY ./asincrono_2.js ./asincrono_2.js

EXPOSE 4444

CMD node app.js
