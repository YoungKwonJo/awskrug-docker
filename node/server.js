'use strict';

const express = require('express');

const os = require('os');
var hostname = os.hostname();

const PORT = 8000;
const HOST = '0.0.0.0';

// App 
const app = express();
app.get('/', (req, res) => {
  //res.send('<h2>' + 'Hostname!!!: ' + hostname + '</h2>');
  res.send('<h2>' + 'Hello World!!!' + '</h2>');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
