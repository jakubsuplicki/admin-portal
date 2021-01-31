const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport');
require('../middleware/auth');

const app = express()

//could add allowed origins here and pass to cors method
// const corsOptions = {
//   origin: "http://localhost:8080"
// };

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

// start sequalizer and sync tables etc.
const db = require('../models');
db.sequelize.sync();

const users = require('../routes/users')
const dashboard = require('../routes/dashboard')

app.use('/users', users)
//securing entire route with JWT strategy as a middleware, only users with token should be able to access it
//  
app.use('/dashboard', passport.authenticate('jwt', { session: false }), dashboard)

const port = process.env.PORT || 3000;
const hostname = '127.0.0.1';

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});