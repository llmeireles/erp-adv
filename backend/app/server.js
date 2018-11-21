const config = require('../config').server;
const express = require('express');

const app = express();

app.listen(config.port,config.host, ()=> {
    console.log(`app running on http://"${config.host}:${config.port}`);
});