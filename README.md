# E-commerce Back End Starter Code

Walkthrough video of functioning application:

https://drive.google.com/file/d/1q-ZZzhjh51zHGLLI9G25Nr9hN68gdRgt/view 

## Description

Build the back end for an e-commerce site utilizing Express.js API and configure it to use Sequelize to interact with a MySQL database.

## Installation

In order to use this application, you will need to install Visual Studio Code, Node.js, MySQL, and Insomnia.

Once the above programs have been installed, you can then initialize the application by doing the following:

1. Clone the repository
2. Run NPM install in your terminal to install the Node Package Manager
3. Edit the .env file as needed
4. From there, you'll need to configure the MySQL database, which you can do by running "mysql -u root -p" in your terminal to initialize MySQL and enter your username and password when prompted to log in
5. After you're logged in, run the command "source db/schema.sql" to create the database schema for this application and "npm run seed" to populate the database with inital data
6. As a last step, you will then invoke the application and sync the Sequelize models to the MySQL database by running the command "npm start" in your terminal

## Usage

Once you've invoked the application you can open Insomnina you can test the application by sending a POST request to create a new product, category, or tag, a GET request to retrieve data, a PUT request to update data, or a DELETE request to remove data.

## Credits

Referenced Module 13 (ORM) activites 8, 10, 22, 24 and 26 (mini project).

## License

N/A