const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

module.exports = server;
