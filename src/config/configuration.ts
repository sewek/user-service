export default () => ({
   port: Number(process.env.PORT) || 3000,
   database: {
      url:
         process.env.DATABASE_URL ||
         'https://jsonplaceholder.typicode.com/users',
   },
   auth: {
      user: process.env.AUTH_USER,
      pass: process.env.AUTH_PASS,
   },
});
