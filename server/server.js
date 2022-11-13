require('dotenv').config(); // allows to access environment variables

const express = require('express'); // middleware for node js

const app = express(); // initiate express

app.use(express.json()) // Middleware to use json
// app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.send('AZULARC')
});

app.post('/employee', (req,res) => {
    if(req.body.name) {
        return res.json({name: req.body.name})
    } else {
        return res.status(400).json({error: "No name provided"})
    }
});
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.port}`)
})