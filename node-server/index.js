const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.post('/register', (req, res) => {
    const { email, firstName, lastName } = req.body;
    if (!email || !firstName || !lastName) {
        return res.status(400).json({ message: 'Please Enter All Fields' });
    }
    res.status(200).json({ message: 'User Registered Successfully' });
});

app.listen(8080, () => {
    console.log('Server Running On Port ~ 8080');
});