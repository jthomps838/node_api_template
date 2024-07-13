# Node API Template

## Description

This is a Node.js API template that integrates TypeScript, Swagger documentation, linting, and Prisma for easy development of robust APIs. It's designed to help you quickly get started with your next project.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Scripts](#scripts)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- **TypeScript Support**: Full TypeScript integration for type safety and better development experience.
- **Swagger Documentation**: Easy setup for API documentation using Swagger.
- **Linting and Formatting**: Pre-configured ESLint and Prettier for consistent code quality.
- **Prisma Integration**: Use Prisma as your ORM to interact with your database seamlessly.
- **Nodemon for Development**: Automatically restarts the server on file changes during development.

## Installation

To get started with this template, clone the repository and install the dependencies:

```bash
git clone https://github.com/jthomps838/node_api_template.git
cd node_api_template
npm install
```

## Scripts

The following scripts are available in this project:
|-----|-----|
|Script| Description |
|`start` | Start the application |
| `dev` | Start the application in development mode (with Nodemon) |
|`test` | Placeholder for running tests |

### Example Commands

To start the application:

```bash
npm start
```

To start the application in development mode:

```bash
npm run dev
```

## Configuration

### Environment Variables

You may need to set up your environment variables. Create a `.env` file in the root of the project and add your configuration settings, such as database connection strings.

### Example `.env` file

```plaintext
DATABASE_URL="mongodb://localhost:27017/mydatabase"
```

## API Documentation

API endpoints can be documented using Swagger. Make sure to set up Swagger in your index.ts to serve the API documentation.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

1. Fork the repository.

2. Create a new branch (git checkout -b feature/YourFeature).

3. Make your changes and commit them (git commit -m 'Add some feature').

4. Push to the branch (git push origin feature/YourFeature).

5. Open a pull request.

## License

NA

## Author

Joseph Thompson
