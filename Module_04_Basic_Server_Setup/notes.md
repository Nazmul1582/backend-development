# JavaScript with Node.js and Express.js

## 4.1.6: GET API - Query Parameters vs Path/Route Parameters

### Objective

Create a Node.js server using Express.js and implement GET APIs to understand the practical differences between Query Parameters and Path/Route Parameters.

### Key Concepts

#### 🔗 Path/Route Parameters

- **Definition:** Variables embedded in the URL path
- **Syntax:** `/users/:id` → `/users/123`
- **Use Case:** Identifying specific resources (GET, UPDATE, DELETE operations)
- **Access:** `req.params.parameterName`

#### ❓ Query Parameters

- **Definition:** Key-value pairs appended after `?` in the URL
- **Syntax:** `/search?category=books&price=50`
- **Use Case:** Filtering, sorting, pagination, optional parameters
- **Access:** `req.query.parameterName`

### Microservice Concept

Make GET requests from one backend server to another backend server to understand microservice architecture. Also call APIs from Thunder Client, Postman, and browsers for comprehensive testing.

## 4.1.7: Backend service as Client [Calling backend from other Backend]

## FAST API vs Express JS : How they are almost same?

Created a Python server using FastAPI and handle the get request with route parameters and query parameters
