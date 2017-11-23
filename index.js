
"use strict"
// dependencies
const express = require('express');

// new instances
const app = express();
const port = process.env.PORT || 8083;

app.use(express.static('Novemeber-Hackaton/web'));
// listen for a localhost port and logging it on the console
app.listen(port, function() {
  console.log('App running on port: ' + port);
});
