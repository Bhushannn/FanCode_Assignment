# FanCode Todo Completion Checker
<img src="fancode-todo-app/public/FanCode_Logo.png" alt="FanCode Logo" width="300"/>

This project is a React application that checks if the users belonging to the city "FanCode" have completed more than 50% of their todo tasks. It fetches data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) and filters users based on specific latitude and longitude ranges to determine their city. The project also includes Bootstrap for styling.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Edge Cases](#edge-cases-handled)
- [Technologies Used](#technologies-used)
- [API Endpoints Used](#api-endpoints-used)

---

## Prerequisites

Make sure you have the following tools installed on your machine:
- **Node.js** (v14 or later)
- **npm** or **yarn**

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Bhushannn/FanCode_Assignment
   cd fancode-todo-app
   ```

2. **Install dependencies:**
   If using npm:
   ```bash
   npm install
   ```
   If using yarn:
   ```bash
   yarn install
   ```

## Running the Project

Once all the dependencies are installed, you can run the project:

- For npm:
  ```bash
  npm start
  ```
- For yarn:
  ```bash
  yarn start
  ```

The application will start on `http://localhost:3000/` and you will be able to see the list of FanCode city users and their todo task completion status.

## Project Structure

```bash
├── public/
├── src/
│   ├── components/
│   │   ├── Header.js            # Displays the header with the project title and logo
│   │   ├── UserDetails.js       # Displays each user's todo completion percentage
│   │   └── UserList.js          # Displays the list of FanCode city users
│   ├── images/                  # Contains Images
│   ├── services/
│   │   └── api.js               # Handles API calls to fetch users and todos
│   ├── utils/
│   │   └── location.js          # Contains the function to check if a user belongs to FanCode city
│   ├── App.js                   # Main application component
│   ├── index.js                 # React entry point
│   └── index.css                # Global styles
├── package.json
├── README.md
└── .gitignore
```

### Explanation of Key Files:
- **UserList.js**: Fetches and displays users who belong to FanCode city.
- **UserDetails.js**: Shows the percentage of completed todo tasks for each user.
- **api.js**: Contains API functions that fetch user and todo data from the JSONPlaceholder API.
- **location.js**: Includes logic to check if a user belongs to the FanCode city based on latitude and longitude.

## Key Features

1. **User Filtering by Location**: Only users whose latitude and longitude fall within the specified ranges (latitude: -40 to 5, longitude: 5 to 100) are considered FanCode city users.
2. **Todo Completion Percentage**: For each user, the application calculates the percentage of todo tasks completed.
3. **Bootstrap UI**: The interface is styled using Bootstrap for a clean, responsive layout.

## Edge Cases Handled

1. **Users with No Todos**: The application gracefully handles users who have no todos by displaying 0% completion.
2. **Todo List Loading**: Shows a loading state while the API call to fetch todos is in progress.
3. **Error Handling**: If the API fails, an error is logged to the console, and the user is notified.

## Technologies Used

- **React.js**: For building the UI and handling component logic.
- **Bootstrap**: For responsive styling.
- **Axios**: To handle HTTP requests.

## API Endpoints Used

- `/users`: Fetches the list of users.
- `/todos`: Fetches todo tasks for each user.

---

## License

This project is licensed under the MIT License.

---
