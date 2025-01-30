const express = require('express')
const app = express();
const cors = require('cors')
const morgan = require('morgan')
const port = 3300
const authenticationRouter = require("./router/authentication")
const bodyParser = require('body-parser')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/bdas', authenticationRouter)

app.use((err, res, next) => {
  console.log(err)
  res.status(500).send('Internal Server Error')
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });