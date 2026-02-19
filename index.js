const app = require("./app.js");

PORT = 3000;

const startServer = () => {
    app.listen(PORT, () => {
        console.log("server starts");
    });

}

startServer();