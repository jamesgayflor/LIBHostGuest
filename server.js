const express = require("express");
const server = express();
const port = 1000;

server.listen(port, () => {
    console.log(`LodgeLiberia is running on port ${port}`)
})