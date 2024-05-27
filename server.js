const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = express.Router();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/enquiry-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Serve the "public" folder as static assets
app.use(express.static('public'));

// Use the enquiry route

app.use('/', (req, res) => {
  res.render('index2');
});
module.exports = router;
// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});