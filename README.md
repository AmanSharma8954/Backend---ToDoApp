# Todo App - Backend

## Introduction

This is the backend implementation for a Todo App where users can create, update, fetch, delete all the Todo entry.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- RESTful API

## How to use
```
  git clone git@github.com:AmanSharma8954/Backend---ToDoApp.git

  npm i

  npm run dev
```

## Tasks

This project involves implementing the following tasks:

## 1) Create a Todo Entry using POST

- Endpoint: ```http://localhost:3000/api/v1/createTodo```
- Method: POST
- Request Body: JSON
```json
  {
      "title": "Title1",
      "description": "Description1"
  }
```
- Description: This task involves creating a new Todo Entry with a title and description and by default createdAt and UpdatedAt is present with every entry.

## 2) Fetching a Todo Entry using GET
- Endpoint: ```http://localhost:3000/api/v1/getAllTodos```
- Method: GET
- Description: This task involves fetching Todo Entries.
  
## 3) Fetching a Todo Entry by ID using GET
- Endpoint: ```http://localhost:3000/api/v1/getTodoBYId/:id```
- Method: GET
- Description: This task involves fetching Todo Entry using specific ID.
  
## 4) Updating a Todo Entry by ID using PUT
- Endpoint: ```http://localhost:3000/api/v1/updateTodo/:id```
- Method: PUT
- Request Body: JSON
```json
{
      "title": "updated Title1",
      "description": "updated Description1"
}
```
- Description: This task involves updating an existing Entry.

## 5) Deleting a Todo Entry by ID using DELETE
- Endpoint: ```http://localhost:3000/api/v1/deleteTodo/:id```
- Method: DELETE

- Description: This task involves deleting an existing Entry.


## Models
This project uses the following data models:

## Todo Model
- Fields:
  1. title: string
  2. description: string
  3. createdAt: Date
  4. updatedAt: Date
