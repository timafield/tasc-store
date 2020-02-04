const port = process.env.PORT || 4000;

const server = require('./src/server.js');

server.listen(port, () => {
    console.log("Listening on: http://localhost:"+port);
});
