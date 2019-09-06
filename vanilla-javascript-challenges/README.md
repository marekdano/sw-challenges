# vanilla-javascript-tests

*Implementation of normalization and sort challenges*

## Description

This is the place where normalization and sort challenges are solved. For more details of requirements please check **normalization-instructions.txt** and **sort-instructions.txt**.

## Development

### Install dependencies

```
npm install
```

### Seeing results from the implementation of normalization and sort challenges

The results from normalization and sort functions are logged to the console when the script is executed. The input to the functions are taken from *normalization.js* and *dataset.json* files.
```
npm run execute
```

### Testing 

If the version of **node.js** on your machine is 11 or higher, execute:

```
npm run test
```

If the version of **node.js** on your machine is lower than 11 and docker is installed on the testing machine, follow the steps by executing commands
```
docker build -t vanilla-javascript-challenges .

docker run --name app vanilla-javascript-challenges
```

The unit tests will be executed.

To stop container and remove it, execute:

```
docker stop app 

docker rm app
```

**TIP** Checking what containers have been running on the machine, execute:
```
docker ps -a
```
  
## Implementation details

* The implementation of *normalization* uses the *flatMap* function, new ES2019 feature. To test it with *jest* the node version of 11 has to be used. Before running tests make sure that the version of your **node.js** is 11. Please check [testing](#testing) section for more information.
