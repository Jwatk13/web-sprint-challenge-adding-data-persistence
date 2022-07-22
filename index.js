// start your server here
const server = require("./api/server");

require('dotenv').config();

const port = process.env.PORT || 9000;

server.listen(port, () => console.log(`\nAPI running on port ${port}\n`));