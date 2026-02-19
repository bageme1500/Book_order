const debug = require("debug")('order:server');
const app = require("./app.js");
const { PORT } = require('./config');



const startServer = () => {
    app.listen(PORT, () => {
        debug(`server listening on port ${PORT}`)
    }).on("error", (err) => {
        debug(err);
        process.exit();
    });

}

startServer();