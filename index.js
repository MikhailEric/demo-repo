const express = require("express");

const app = express();

const port = 8080;

app.get("/", (req, res) => {
    res.status(200).send({"name":"John", "age":"34"});
})

app.listen(
    port,
    () => {
        console.log(`App is Listening on port ${port}`)
    }
)

