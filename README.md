# User Service

User's website design as a recruitment task.

## Assumptions

Write a simple REST-ful API in Nest.js (use TypeScript and Express.js)

Use https://jsonplaceholder.typicode.com/users as simple API data provider.

Your API should have the following functionalities (must):

-  [x] ApiDoc Documentation available on /docs
-  [x] Implemented /users method (list)
-  [x] Implemented /user/{id} method (fetch single entry)
-  [x] Simple basic auth to secure api with admin login and password

You’ll get extra points for:

-  [x] Implementing well-known project structure. (DDD is preferred but you can also use another one)
-  [x] Logger and standarized response with requestId - your every endpoint response should have similar structure but different payload

## Installation

### Install dependencies

```bash
$ npm install
```

## Running the app

### Create configuration file

```bash
$ echo "AUTH_USER=...\nAUTH_PASSWORD=..." > .env
```

### Run

```bash
$ npm run start
```
