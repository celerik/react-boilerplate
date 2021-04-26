# FlowOS Scheduler

## Installation

##### Basics (ENV: Local)
Download and clone this repository using
This project was developed
```
git clone https://celerik@dev.azure.com/celerik/FlowOS/_git/flowos-scheduler-ui
```
Install dependencies with:
```
npm install
```
Finally, run this project using:
```
npm start
```

##### Run different environments
FlowOS has suppor for many different environments right now and running this project with ```npm start``` will only deploy a development version in your browser.
You can set an environment variable for any of these before running ```npm start``` command
```
SET REACT_APP_ENVIRONMENT=local
SET REACT_APP_ENVIRONMENT=qa
SET REACT_APP_ENVIRONMENT=production
```
If needed, you can change some of the following configuartions in any ```env-{NAME}.json``` file located at ```/config/settings```

- Any of the microservices root URL
- Service Mocker configuration
- Redux middlewares configuration
- Mocked third party API's authorizations *(Please, don't leave any of these keys in your production deployment)*

##### Build
For building this code you can simply run
```
npm run build
```

This will generate your production files in ```./build``` folder. Then, youc an use any HTTP server to see it or deploy it.

We suggest using npm ```http-server``` for checking the status of the build before deployment.

```
npx http-server ./build
```

##### Docker
After the creationg of your ```build``` folder with ```npm start```, you can create and run Docker images with:
```
# Create new Docker Image
docker build -t $IMAGE_NAME .
docker run -it -rm -p $PORT_BIND:$PORT_LISTEN --name $NAME $IMAGE_NAME
```
For example:
```
docker build -t flowos .
docker run -it -p 3000:0 --name flowosapp flowos
```

##### Avaliable Scripts

FlowOS has many other scripts that are pretty helpful for any Dev Team.

- ```lintj``` - You can use this for checking if any change in the code is syntactically correct according to the project's structure.

- ```test``` - this script is related to QA suite, it'll help you to run Unit Tests implemented for this project and collecting the coverage of the tested code.

- ```storybooks``` - This script will run a new server in ```localhost:6006``` with documentation related to components implemented in this project (Atoms, Organisms and Templates).

## Milestones
| Module | Description                                                     | Release | Screens | Deadline     |
|--------|-----------------------------------------------------------------|---------|---------|--------------|
| R1-M1  | Main Page & Projects Main Page & Project Page                   | R1      | 5       | March 19     |
| R1-M2  | Project - Settings                                              | R1      | 2       | March 23     |
| R1-M3  | Project - Service Patterns - View / Add / Lock Service Patterns | R1      | 7       | April 1      |
| R1-M4  | Project - Service Patterns - Edit Service Pattern               | R1      | 27      | May 10       |
| R1-M5  | Project - Observation Periods                                   | R1      | 6       | May 18       |
| R1-M6  | Project - Project Vehicles                                      | R1      | 4       | May 24       |
| R3-M1  | Project - Service Parameters - Interworking                     | R3      | 8       | June 3       |
| R3-M2  | Project - Service Parameters - Stop Groups                      | R3      | 5       | June 10      |
| R3-M3  | Project - Service Parameters - Service Pattern Requirements     | R3      | 11      | June 25      |
| R3-M4  | Project - Service Parameters - Frequency                        | R3      | 8       | July 7       |
| R3-M5  | Project - View Results - Project Runs                           | R3      | 6       | July 15      |
| R4-M1  | Project - Run Project & Project - View Results - Timebands      | R4      | 3       | July 20      |
| R5-M1  | Project - View Results - Timetables                             | R5      | 2       | July 22      |
| R5-M2  | Project - View Results - Bus Blocks                             | R5      | 3       | July 27      |
| R5-M3  | Project - View Results - KPIs                                   | R5      | 2       | July 29      |
| R5-M4  | Project - View Results - Project Runs - Export                  | R5      | 0       | July 29      |
| R5-M5  | Teams - Manage Teams & Manage Users                             | R5      | 3       | August 3     |
| R6-M1  | Data Explorer - Select Route & Period                           | R6      | 5       | August 10    |
| R6-M2  | Data Explorer - Timetable                                       | R6      | 4       | August 16    |
| R6-M3  | Data Explorer - Bus Blocks                                      | R6      | 3       | August 19    |
| R6-M4  | Data Explorer - KPIs                                            | R6      | 2       | August 23    |
| R7-M1  | Project - Times                                                 | R7      | 14      | September 10 |
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
