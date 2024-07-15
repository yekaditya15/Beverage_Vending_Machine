## Live Demo

You can view the live demo [here](https://beverage-vending-machine-client.vercel.app/).

# Beverage Vending Machine - Backend

This repository contains the backend codebase for a Beverage Vending Machine application. It handles the business logic, API endpoints, and database interactions for managing beverages, inventory, and logs.

## Technologies Used

- **Node.js**: Runtime environment for JavaScript.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing inventory and logs.
- **Mongoose**: MongoDB object modeling for Node.js.
- **SendGrid**: Email delivery service used for notifications.
- **Other dependencies**: `axios`, `cors`, `dotenv`, `nodemon` (for development), `sendgrid/mail`, `mongoose-paginate-v2`, etc.

## Prerequisites

- Node.js installed on your machine
- MongoDB installed locally or accessible MongoDB URI
- SendGrid API key (for email notifications)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your/repository.git
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```plaintext
   PORT=8000
   MONGODB_URI=mongodb://localhost:27017/beverage-vending-machine
   SENDGRID_API_KEY=your_sendgrid_api_key
   STAFF_EMAIL=staff@example.com
   ADMIN_EMAIL=admin@example.com
   ```

   Adjust `PORT`, `MONGODB_URI`, and `SENDGRID_API_KEY` as necessary.

4. **Start the server:**

   ```bash
   npm start
   ```

   Or, for development with automatic restarts:

   ```bash
   npm run dev
   ```

5. **API Documentation:**

   Explore the API endpoints at `http://localhost:8000/api` after starting the server.

## API Endpoints

- **GET `/api/beverages`**: Fetch all available beverages.
- **POST `/api/beverage`**: Dispense a beverage.
- **GET `/api/inventory`**: Fetch current inventory levels.
- **POST `/api/inventory`**: Update inventory levels.
- **POST `/api/inventory/reset`**: Reset inventory levels.
- **GET `/api/logs`**: Fetch logs of dispensed beverages.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or bug fixes. Please follow the existing coding style and commit message conventions.


---

### Frontend README

---

# Beverage Vending Machine - Frontend

This repository contains the frontend codebase for a Beverage Vending Machine application. It provides a user interface for ordering beverages, managing inventory, and viewing logs.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: Declarative routing for React applications.
- **Ant Design**: UI library for React with a set of high-quality components.
- **React Toastify**: Notifications for React applications.

## Prerequisites

- Node.js installed on your machine

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your/repository.git
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   This will start the development server at `http://localhost:3000`.

## Usage

Navigate to `http://localhost:3000` in your web browser to access the Beverage Vending Machine application.

## Features

- **Order Beverage**: Select from available beverages and place an order.
- **Manage Inventory**: Update inventory levels and reset inventory.
- **View Beverage Logs**: See logs of dispensed beverages.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or additional features. Please follow the existing coding style and commit message conventions.

## License

This project is licensed under the [MIT License](LICENSE).

---
