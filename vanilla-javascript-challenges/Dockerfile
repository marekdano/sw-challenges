# start from base
FROM node:11

# set working directory
WORKDIR /app

# copy the application code to the working directory
COPY . .

# fetch app specific dependencies
RUN npm install

# start run test with this command
CMD [ "npm", "test" ]
