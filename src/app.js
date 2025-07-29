const express = require('express');
const app = express();
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));
app.use('/api/alert', require('./routes/alert'));
app.use('/api/entity', require('./routes/entity'));
app.use('/api/health', require('./routes/health'));
module.exports = app;