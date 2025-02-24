const express = require('express')
const app = express();
const cors = require('cors')
const morgan = require('morgan')
const port = 8080;
const authenticationRouter = require("./router/authentication")
const bodyParser = require('body-parser')
const newsRouter = require('./router/newsrouter')
const testRouter = require('./router/testrouter')

const corsOptions = {
  origin: 'http://192.168.205.178:5173', // Allow requests from this origin
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));


app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/bdas', authenticationRouter)
app.use('/bdas', newsRouter)
app.use('/bdas', testRouter) //For testing

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });