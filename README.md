# Social Network API

## Description

This project is a back-end API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. It's built with Express.js, MongoDB, and Mongoose.

[Watch the walkthrough video on YouTube](https://youtu.be/V5Cp2akIVZY)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

To install the necessary dependencies, run the following command:

```bash
npm install
```

## Usage

To start the server, run the following command:

```bash
npm start
```

## API Routes

### Users

- `GET /api/users`: Get all users
- `GET /api/users/:id`: Get a single user by ID
- `POST /api/users`: Create a new user
- `PUT /api/users/:id`: Update a user by ID
- `DELETE /api/users/:id`: Delete a user by ID

### Thoughts

- `GET /api/thoughts`: Get all thoughts
- `GET /api/thoughts/:id`: Get a single thought by ID
- `POST /api/thoughts`: Create a new thought
- `PUT /api/thoughts/:id`: Update a thought by ID
- `DELETE /api/thoughts/:id`: Delete a thought by ID

### Reactions

- `POST /api/thoughts/:thoughtId/reactions`: Create a reaction
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Delete a reaction

## License

This project is licensed under the MIT License.

## Contributing

If you would like to contribute, please fork the repository and submit a pull request.

## Questions

If you have any questions about the project, please open an issue or contact me directly at [jony0418@gmail.com](mailto:jony0418gmail.com).
