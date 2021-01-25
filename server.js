const cors = require('cors');
const express = require('express');
const path = require('path');

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};

const app = express().use('*', cors(corsOptions));

app.post('*', cors(corsOptions));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', cors(corsOptions), (_req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server run in port ${port}`);
});
