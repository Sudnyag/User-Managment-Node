
# User Managment System
A Node.js application for managing users, supporting CRUD operations. This project uses MongoDB for data storage and provides RESTful API endpoints for interaction.


## Projet Overview
This project is designed to provide an easy-to-use interface for user management. It allows users to perform the following operations:

Create new users.
Retrieve user details by ID.
Update user information.
Delete user accounts.
Features
RESTful API design.
MongoDB for database storage.
Error handling for better user experience.
Interactive API documentation using Swagger.
## Tehnologies Used
Node.js - Backend framework.
Express.js - API routing and middleware.
MongoDB - Database for storing user information.
Mongoose - MongoDB object modeling for Node.js.
Swagger - API documentation.
## API Reference

#### create user 

```http
  POST /userApp/submit
```

#### login user

```http

  POST /userApp/login
```
#### All user

```http

  GET /userApp/getAll

```
#### Update user

```http

  PUT /userApp/update
```
#### delete user

```http

  DELETE /userApp/dete
```




