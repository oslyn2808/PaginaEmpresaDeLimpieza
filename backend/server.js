const express = require('express');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contact');
const { createTable } = require('./models/contactModel');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Elvas Cleaning API is running' });
});

createTable();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});