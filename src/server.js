const express = require("express");
const cors = require("cors");
const { port } = require("./config");
const app = express();

console.log("noDEEmon");

app.listen(port, () => console.log("Hello express is online", port));
