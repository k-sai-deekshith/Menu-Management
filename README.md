# Menu Management API

## Overview
Welcome to the Menu Management API project! This Node.js backend server is designed to manage a hierarchical menu system, including categories, subcategories, and items. The project demonstrates how to create, retrieve, update, and search these entities efficiently using RESTful APIs. The application is built with Express.js and MongoDB, ensuring a robust and scalable solution.

## Features
- **Create, Retrieve, Update, and Delete**: Full CRUD operations for categories, subcategories, and items.
- **Search Functionality**: Search items by name with ease.
- **Structured API Endpoints**: Clear and concise endpoints for managing the menu system.

## Project Setup

### Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (v14.x or higher)
- MongoDB (local or cloud-based like MongoDB Atlas)

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/k-sai-deekshith/menu-management.git
   cd menu-management
   ```

2. **Install the dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add your MongoDB URI and port:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Start the server**:
   ```bash
   npm start
   ```

## API Endpoints

### Category Endpoints
- **Create a category**
  - **POST** `/api/categories`
  - **Body**:
    ```json
    {
      "name": "Beverages",
      "image": "http://example.com/image.jpg",
      "description": "A variety of beverages",
      "taxApplicability": true,
      "tax": 10,
      "taxType": "percentage"
    }
    ```

- **Get all categories**
  - **GET** `/api/categories`

- **Get a category by ID**
  - **GET** `/api/categories/:id`

- **Update a category**
  - **PUT** `/api/categories/:id`
  - **Body**:
    ```json
    {
      "name": "Updated Beverages",
      "image": "http://example.com/new-image.jpg",
      "description": "An updated variety of beverages",
      "taxApplicability": false,
      "tax": 5,
      "taxType": "fixed"
    }
    ```

### SubCategory Endpoints
- **Create a sub-category**
  - **POST** `/api/subcategories`
  - **Body**:
    ```json
    {
      "name": "Soft Drinks",
      "image": "http://example.com/subcategory-image.jpg",
      "description": "A variety of soft drinks",
      "taxApplicability": true,
      "tax": 5,
      "categoryId": "60d21b4667d0d8992e610c85"
    }
    ```

- **Get all sub-categories**
  - **GET** `/api/subcategories`

- **Get a sub-category by ID**
  - **GET** `/api/subcategories/:id`

- **Update a sub-category**
  - **PUT** `/api/subcategories/:id`
  - **Body**:
    ```json
    {
      "name": "Updated Soft Drinks",
      "image": "http://example.com/new-subcategory-image.jpg",
      "description": "An updated variety of soft drinks",
      "taxApplicability": false,
      "tax": 3
    }
    ```

### Item Endpoints
- **Create an item**
  - **POST** `/api/items`
  - **Body**:
    ```json
    {
      "name": "Coca Cola",
      "image": "http://example.com/item-image.jpg",
      "description": "A refreshing soda drink",
      "taxApplicability": true,
      "tax": 2,
      "baseAmount": 50,
      "discount": 5,
      "totalAmount": 45,
      "subCategoryId": "60d21b4667d0d8992e610c86"
    }
    ```

- **Get all items**
  - **GET** `/api/items`

- **Get an item by ID**
  - **GET** `/api/items/:id`

- **Update an item**
  - **PUT** `/api/items/:id`
  - **Body**:
    ```json
    {
      "name": "Updated Coca Cola",
      "image": "http://example.com/new-item-image.jpg",
      "description": "An updated refreshing soda drink",
      "taxApplicability": false,
      "tax": 1,
      "baseAmount": 55,
      "discount": 10,
      "totalAmount": 45
    }
    ```

- **Search items by name**
  - **GET** `/api/items/search`
  - **Query Parameter**: `name`
    - Example: `/api/items/search?name=Coca`

## Documentation
- **Inline Comments**: Code is commented for clarity and understanding.
- **Loom Video**: A Loom video explaining all operations can be found [here](https://www.loom.com/share/d5aa2b248b454ab5a24a8be30d91f1f2).

## Short Answer Questions

- **Which database you have chosen and why?**
  I chose MongoDB for its flexibility in schema design, which is ideal for the hierarchical nature of categories, subcategories, and items. Its integration with Node.js via Mongoose makes it a great choice for this project.

- **Three things learned from this assignment:**
  1. Structuring a Node.js project with MVC architecture.
  2. Utilizing Mongoose for MongoDB operations.
  3. Implementing RESTful APIs for CRUD operations.

- **Most challenging part of the assignment:**
  Ensuring data consistency and managing relationships between categories, subcategories, and items.

- **What would you do differently given more time?**
  I would implement user authentication and authorization, add extensive validation for inputs, and create comprehensive test cases for all endpoints.

## License
This project is licensed under the MIT License. 