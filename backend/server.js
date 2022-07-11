const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();

// const
const connectDB = require('./config/db');
const PORT = process.env.PORT || 8000;
// connect to database
connectDB();
const app = express();
// middleware
const { errorHandler } = require('./midlleware/error-middleware');

// request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Support Desk API' });
});

// Routes
app.use('/api/users', require('./routes/user-routes'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on the port:${PORT}`));
