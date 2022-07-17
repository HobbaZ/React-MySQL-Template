# React-app-MYSQL-example

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)
![License](https://img.shields.io/badge/Made%20with-React-darkgreen.svg)
[![Github Commits](https://img.shields.io/github/commit-activity/w/HobbaZ/React-app-MYSQL-example)](https://github.com/HobbaZ/React-app-MYSQL-example/commits)
[![GitHub latest commit](https://img.shields.io/github/last-commit/HobbaZ/React-app-MYSQL-example)](https://github.com/HobbaZ/React-app-MYSQL-example/branches)
[![GitHub followers](https://img.shields.io/github/followers/HobbaZ.svg)]()
![GitHub repo size](https://img.shields.io/github/repo-size/HobbaZ/React-app-MYSQL-example)
[![GitHub issues](https://img.shields.io/github/issues/HobbaZ/React-app-MYSQL-example)](https://img.shields.io/github/issues/HobbaZ/React-app-MYSQL-example)
![GitHub forks](https://img.shields.io/github/forks/HobbaZ/React-app-MYSQL-example)
![GitHub language count](https://img.shields.io/github/languages/count/HobbaZ/React-app-MYSQL-example)

## Description
### Project Aim ###
To create a simple React app with MySQL database to be used as a template to develop websites quicker.

### What Problem Does It Solve ###
Starting a React website from scratch

### What I Learnt ###
How to use MySQL with React

## Deployment
Hasn't been deployed but it can be deployed to Heroku with a JawsDB MySQL database connection, more info about that [here](https://medium.com/analytics-vidhya/deploy-to-heroku-with-jawsdb-mysql-cbe255de73f3)


## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Features](#features)
- [Technology](#technology)
- [Contributors](#contributors)
- [Acknowledgements](#acknowledgements)
- [Testing](#testing)
- [License](#license)
- [Questions](#questions)

## User Story
Create a template for basic setup of a React SPA with MySQL backend.

## Screenshots
![the home page](./assets/images/home-page.png)

![the login page mobile view](./assets/images/login-page-mobile.png)

![the signup page](./assets/images/signup-page.png)

## Installation
1. Clone the repo to your computer by clicking the green code button and copying the SSH version.

2. Open Gitbash in your desired folder and type ```git clone ``` then right click to paste the string and hit enter. The repo will then be cloned to your computer.

3. Navigate to the repo folder and type ```code .``` into gitbash to open the repo in VS Code.

4. Open a new Terminal in VS Code and type ```npm install``` to install the repo dependencies.

5. Create a .env file like the image below in the server folder and input your database details.

![example .env file](./assets/images/example-env.PNG)

6. Finally, type ```npm run develop``` into the terminal and it will start the dev server at localhost:3000.

## Features
- Can create an account, delete your account and update your details.
- User Authentication for profile and login routes.
- Login, signup, home, profile, about and contact pages.
- Express server already set up and ready to go.
- MySQL database ready, change details in .env file to connect yours.
- Fontawesome icons used where appropriate.

## Technology
- MySQL
- React
- Sequelize
- Bcrypt
- Express
- Bootstrap
- JWT

## Contributors
[Zachary Hobba](https://github.com/HobbaZ)

You can also contribute by opening a pull request or submitting an issue.

## Acknowledgements
[MySQL documentation](https://dev.mysql.com/doc/)
[React MySQL tutorial](https://dev.to/nasreenkhalid/simple-react-js-and-mysql-integration-crud-app-backend-5aom)

[https://getbootstrap.com/docs/5.0/components/navbar/](https://getbootstrap.com/docs/5.0/components/navbar/)

[https://fontawesome.com/](https://fontawesome.com/)

[https://ultimatecourses.com/blog/active-navlink-inline-styles-with-react-router](https://ultimatecourses.com/blog/active-navlink-inline-styles-with-react-router)

[Background Photo by Graham Holtshausen on Unsplash](https://unsplash.com/@freedomstudios?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  

Important: Code to kill port processes if something running on port 3000 error ```npx kill-port 3000```, type into your VS Code terminal and hit enter, will kill port 3000 and let you run the app.

## Testing
No tests yet

## License

MIT

**Copyright 2022 Zachary Hobba**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Questions

Find me on Github at [HobbaZ](https://github.com/HobbaZ)
If this has helped you with your web development, consider buying me a Coffee (only costs $3) at [zachobba](buymeacoffee.com/zachobbaS)
Email me at [zachobba@gmail.com](zachobba@gmail.com)