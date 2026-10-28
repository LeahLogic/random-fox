
# Random Fox

A simple and responsive React application that displays random fox photographs using the Random Fox API.

Users can generate a new fox image with a single click without refreshing the page.

## Features

- Fetch random fox photographs from an external API
- Display a random fox image when the application loads
- Generate a new image by clicking the "Get Another Fox" button
- Show a loading indicator while fetching data
- Disable the button during API requests
- Responsive design for desktop and mobile devices
- Clean and minimal user interface

## Technologies Used

- React
- JavaScript (ES6)
- JSX
- CSS3
- Vite
- Fetch API

## How It Works

The application uses a React class component to manage its state.

When the component mounts, `componentDidMount()` calls the `getFox()` method to fetch a random fox image.

The `getFox()` method uses `fetch()` and `async/await` to request data from the Random Fox API.

The image URL returned by the API is stored in the component's state using `setState()`.

Clicking the "Get Another Fox" button calls the same method to retrieve another random image without reloading the page.

## API

This project uses the free Random Fox API:

https://randomfox.ca/floof/

The API returns JSON data containing an image URL.

## Getting Started

Clone the repository:

    git clone https://github.com/LeahLogic/random-fox.git

Navigate to the project directory:

    cd random-fox

Install dependencies:

    npm install

Start the development server:

    npm run dev

Open the local URL provided by Vite.

## Author

[LeahLogic](https://github.com/LeahLogic)
