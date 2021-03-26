# How to run the Lowest Scored Parking App

## Project Setup

---

### Environment Variables

1. Create a file names .env in the root directory of the project.
2. Add these two variables to the within the file:

```
REACT_APP_DEV=development
REACT_APP_BEARER=<Yelp Api Key>
```

3. Visit https://cors-anywhere.herokuapp.com/corsdemo to enable the proxy to eliminate cors issues while running in the localhost development environment.
4. Run the "npm install" command to install all of the dependancies.
5. Run the "npm start" script described below for development.
6. You can also run the "npm test" script to run the unit tests.

## Available Scripts

---

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
