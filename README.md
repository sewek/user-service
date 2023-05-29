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

## Basic usage

### Install dependencies

```bash
$ npm install
```

### Create configuration file

```bash
$ echo "AUTH_USER=...\nAUTH_PASSWORD=..." > .env
```

### Run

```bash
$ npm run start
```

## Alternative usage

Alternatively, you can run the app using Docker.

### Build image

```bash
$ docker build -t sewek/user-service .
```

### Run

```bash
$ docker run --rm -p 3000:3000 -e PORT=3000 -e AUTH_USER=... -e AUTH_PASS=... sewek/user-service
```
