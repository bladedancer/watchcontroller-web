const fs = require('fs');
const https = require('https');
const express = require('express')
const app = express()
const port = process.env.PORT || 8443

const key = fs.readFileSync('./key.pem');
const cert = fs.readFileSync('./cert.pem');

app.use(express.static('./web'));


const server = https.createServer({key: key, cert: cert }, app);

server.listen(port, () => { 
  console.log(`Example app listening on port ${port}`);
});