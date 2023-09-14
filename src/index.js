const express = require('express');

const usersRoutes = require('./routes/users.js');

const middlewareLogRequest = require('./middleware/logs');

const app = express();

app.use(middlewareLogRequest);

app.use('/users', usersRoutes);

app.get("/", (req, res) => {
    res.json({
        nama: "Febri Riyanto",
        email: "febririyanto2106@gmail.com"
    });
});

app.post("/", (req, res) => {
    res.send('Hello Post Method');
});

app.listen(4000, () => {
    console.log('Server berhasil di running di port 4000');
});