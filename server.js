const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/portfolio', { useNewUrlParser: true, useUnifiedTopology: true });

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Contact = mongoose.model('Contact', contactSchema);

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit_contact', (req, res) => {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });

    newContact.save(err => {
        if (err) {
            res.send('Error saving message');
        } else {
            res.send('Message sent successfully!');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
