const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const routes = require('./routes/toDo.route')

const PORT = process.env.PORT || 5000;

app.use('/', routes)
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/test-db', { useNewUrlParser: true, useUnifiedTopology: true });
// Define routes and middleware
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});