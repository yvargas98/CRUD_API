# Modules CRUD Posts, Categories and Users, Authenticated User Role API

## To Run this project you need

- Install node js to you can use `npm` command.
- Clone this repository
- In the local path of this repository execute `npm install` to install all the necessary node modules.
- In the local path create a .env file that contains the enviroments variables:
    - DATABASE_URL, contains the url of your database
    - JWT, is the secret word that you can use to sing the json web tokens.
    - PORT = 8080, you can change the port number
    - WEBAPP_URL = http://localhost:3000, you can clone the web app repository https://github.com/yvargas98/WEBAPP_TEST that uses this API or you can don't write this enviroment variable.
- Execute `npm run dev` to run the project.
- Open http://localhost:8080 to view it in the browser.
