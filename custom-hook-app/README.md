# custom-hook-test

*Simple react application which displays GIFs from GiphyAPI*

## Description 
The application uses a custom hook that fetches data from Giphy's developer API (https://github.com/giphy/GiphyAPI), and displays it in the main component "App".

The default string to query for is *dog*. The application also provides form to query for another string. 

The custom hook returns tracking loading state. While an async-request is loading, the component using the custom hook displays a "Loading..." message.

The custom hook returns an identification if an error has occurred during the fetching of
data. When an error occurs, the component using the custom hook displays an "Error" message.

## Development

### Install dependencies
```
npm install
```

### Running the app locally

```
npm run start
```
After running the project just open your browser and go to http://localhost:3000

### Testing custom hook

```
npm run test
```

## Implementation details

* The custom hook is tested by using *react-hooks-testing-library*.
* The version of dependencies of react, react-dom and react-scripts had to be upgraded for getting tests to work with *react-hooks-testing-library*.
* **API_KEY** of GiphyAPI should be moved to a node environment variable or system variable when the app is deployed to production or the code is pushed to a public git repository.
* For further development more integration tests should be added to test "App" component with the custom hook.