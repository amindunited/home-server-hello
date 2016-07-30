# use our prepared Raspberry Pi compatible Docker base image with Node.js
FROM hypriot/rpi-node

# make the src folder available in the docker image
RUN mkdir /opt/site
ADD . /opt/site
WORKDIR /opt/site

# install the dependencies from the package.json file
RUN npm install

# make port 80 available outside of the image
EXPOSE 80

# start node with the index.js file of our hello-world application
CMD ["node", "server.js"]