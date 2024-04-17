const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config();
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const app = express();

app.use(cors());
app.use(express.json());
// view engine setup
const port = process.env.PORT || 5000;

// const ATLAS_URI = process.env.ATLAS_URI;
const MONGODB_URL = "mongodb://127.0.0.1:27017/judiciary-information-system";
mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then((res) => console.log("Successfully connected to MongoDB"))
  .catch((e) => console.log("Something bad happened", e));

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, ()=>{
    console.log(`Server is running on port : ${port}`);
})