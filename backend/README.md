This is the backend API for the Furr FluffSpa project.
# Furr-Fluff Spa

## Overview

Furr-Fluff Spa is a web application designed for pet grooming services. The application includes a backend server built with Node.js and Express, a MongoDB database, and a frontend developed using React.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Frontend](#frontend)
- [Docker Setup](#docker-setup)
- [Running Tests](#running-tests)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Node.js (v14 or later)
- MongoDB
- Docker (optional, for containerized setup)

### Backend Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/furr-fluff-spa.git
    cd furr-fluff-spa/backend
    ```

2. Install backend dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add your MongoDB URI and other environment variables:
    ```plaintext
    MONGO_URL=mongodb://localhost:27017/furr-fluff-spa-dev
    PORT=3001
    ```

4. Start the backend server:
    ```sh
    npm start
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```sh
    cd ../frontend
    ```

2. Install frontend dependencies:
    ```sh
    npm install
    ```

3. Start the frontend development server:
    ```sh
    npm start
    ```

## Usage

Once both servers are running, you can access the application by navigating to `http://localhost:3000` in your web browser.

## API Endpoints

- `GET /api/data`: Retrieve data from the backend.
- Add other endpoints here as needed.

## Frontend

The frontend is built using React. Ensure the API base URL in `src/api.js` is correctly pointing to your backend server:
```javascript
// src/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api', // Adjust this URL based on your backend server
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
Example Usage in React Component
javascript
Copy code
// src/components/ExampleComponent.js
import React, { useEffect, useState } from 'react';
import apiClient from '../api';

const ExampleComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiClient.get('/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;
