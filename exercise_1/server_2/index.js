const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Server 2 Working!',
        hostname: os.hostname(),
        service: 'node-http',
        port: PORT
    });
});


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
}); 