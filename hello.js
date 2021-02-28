const express = require('express');
const app = express();
const port = process.env.PORT || 8888;
app.get("/", (req, res) => {
    var j=res.getHeader();
    res.end(j);
});

app.get("/test", (req, res) => {
    res.end("You are in the /test");
});

app.listen(port, () => {
    console.log(`server listen on port =${port}`)
});