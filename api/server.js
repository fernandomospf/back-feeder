const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const userRoute = require('../src/routes/routeUser');

app.use(express.json());

app.use('/user', userRoute);

app.listen(PORT, () => {
  console.log(`App escutando na porta ${PORT}`);
});
