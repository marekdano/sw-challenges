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

```
npm run test
```

## Implementation details

* The implementation of *normalization* uses the *flatMap* function, new ES2019 feature. To test it with *jest* the node version of 11 has to be used. Before running tests make sure that the version of your node is 11.
