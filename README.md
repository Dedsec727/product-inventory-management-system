# Product Inventory Management System

## Setup and Installation

### Prerequisites

- Node.js
- Docker
- Docker Compose

### Steps

1. Clone the repository
2. Navigate to the project directory
3. Run `docker-compose up --build`
4. The API will be accessible at `http://localhost:3000`

## API Endpoints

### Product

- Create Product: `POST /products`
- Update Product: `PUT /products/:id`
- Delete Product: `DELETE /products/:id`
- List Products: `GET /products`
- View Product Details: `GET /products/:id`
- Adjust Stock: `PATCH /products/:id/stock`

### Supplier

- Create Supplier: `POST /suppliers`

## Running the Application

Use Docker Compose to set up and run the application and PostgreSQL database.
