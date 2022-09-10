FROM node:14

WORKDIR /usr/src/gta-products

COPY ./ ./

RUN npm install

RUN cd client

RUN npm install

CMD ["/bin/bash"]