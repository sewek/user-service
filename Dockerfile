FROM node:16-alpine as builder

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Run the app
FROM builder as runner

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

WORKDIR /app

COPY --from=builder /app .

CMD ["npm", "run", "start"]

