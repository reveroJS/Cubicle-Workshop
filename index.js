const express = require("express");
const config = require("./config/config");
const app = express();

console.log();

app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`));


