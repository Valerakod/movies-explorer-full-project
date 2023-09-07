const express = require('express');
const BodyParser = require('body-parser');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const helmet = require('helmet');
const cors = require('./middlewares/cors');
const errorHandler = require('./middlewares/error');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const limiter = require('./middlewares/limiter');
const router = require('./routes/index');
const { PORT = 3000 } = process.env;
const { MONGODB } = require('./utils/constants');

const app = express();

app.use(BodyParser.json());
app.use(cors);
app.use(helmet());
app.use(limiter);
app.use(requestLogger);
app.use(express.json());

mongoose
  .connect(MONGODB)
  .then(() => {
    console.log('Connected to db mongo');
  });

app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);
app.listen(PORT);
