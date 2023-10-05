/* import express from 'express'; */
const express = require('express'); //cjs common javaScript
const path = require('node:path')
const morgan = require('morgan');
const cors = require('cors');
const apiv1Routes = require('./routes/apiv1.routes');
const { errorRoutes } = require('./routes/error.routes');
require('dotenv').config();

const PORT = process.env.PORT ?? 8001;

const app = express()

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

app.use("/avatar", express.static(path.join(__dirname, "../public")));

app.get('/', (req, res) => {
  res.send('OK');
});

apiv1Routes(app);
errorRoutes(app);


//Los middlewares de error los ubicamos despues de todas nuestras rutas


app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});