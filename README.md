# Frontend Application - CSV Upload and Rate Comparison
## Overview
### This is the frontend application
 price benchmarking tool that allows customers to compare their shipping prices with market prices. The tool will enable users to upload a CSV file of their shipping data, which will then be analyzed and compared against pre-existing market price data. The output will show how their prices compare to the market, highlighting total spending and potential savings.

## Features
# 1. CSV Upload: Upload a CSV file containing user route data.
# 2. Market vs. User Rates: View a comparison between user-uploaded rates and aggregated market rates.
# 3. Percentile-Based Filtering: Filter and view market rates at the 10th, 50th, and 90th percentiles.

## Requirements
Node.js (v16.0 or higher)
npm (v8.0 or higher)

## Setup
# 1. Clone the Repository

# 2. Install Dependencies
```
npm install
```
# 3. Running the Development Server
Start the development server:
```
npm start
```

This will run the application on http://localhost:3000.

## Frontend Components
# App.js:
The main component that renders the application, handles file upload, and displays results.

# FileUpload.js:
A component to handle the CSV file upload and send the data to the backend.

# Chart.js:
A component to visualize market vs. user rates.

# Summary.js:
A component to display the potential savings summary for each route.

## Backend Integration
The frontend communicates with the backend through the following endpoints:

POST /upload_csv: Upload a CSV file containing user route data. The file is parsed, and the data is sent to the backend.
GET /fetch_user_rates: This endpoint fetches the aggregated market rates and user-uploaded rates. It also calculates potential savings.
POST /upload_market_data: This endpoint aggregates market data into percentiles (10th, median, 90th) and stores it in the aggregated_market_prices table.



** Make sure that the backend server is running and accessible before starting the frontend application. **

Technologies Used
React
Tailwind CSS (for styling)
Axios (for HTTP requests)





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
