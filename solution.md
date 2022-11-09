# Fearless Trial Project Solution README

This project was created using [create-react-app] (https://github.com/facebook/create-react-app).

In order to start the project clone the project unto your system and run the command:

### `npm start`

This runs the application on [http://localhost:3000](http://localhost:3000) in the browser. 

## Project Details

In this project, the app is serving the counter component that displays a number counter. This number counter is from the [https://countapi.xyz/#format](https://countapi.xyz/#format) api. The component also has two buttons for incrementing and decrementing the counter by 1. There's also a .env file for configuring the namespace as well as api url.

## How to configure the project to serve a different port

In the project root there's a .env file with a configurable PORT variable. Change the variable to your desired port. i.e `PORT=<YOUR_PORT>`. Or inside package.json you can add to the start script:

### `'start': 'set PORT=<YOUR_PORT> && react-scripts start`

## Future updates, changes, assumptions, details etc.

In future updates I would like to add more packages such as font-awesome icons, scss, styled components, or bootstrap to make css development easier and have better looking styling. And also add @media breakpoint css rules to create a better responsive design across various screens, such that the component would have better/proper responsiveness. Another feature I would like to add would be the ability to let the user create their own counter component with a personal specified name-space and key. I would also like to implement better error handling on the api calls especially if we are getting 500 or 404 errors from the count api. A package that could help with error handling would be React-Query that could also be added to the project.

