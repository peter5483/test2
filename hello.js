let express = require('express');
let app = express();
let port = process.env.PORT || 8888
let user_router = require('./routers/main_router.js')

app.get("/", (req, res) => {
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    }
    res.sendFile("./routers/homepage.html", options)
})

app.get("/test", (req, res) => {
    var h="holo";
    res.render("./routers/test.html",{layout: false,nickname:h})
})

app.use("/user", user_router)

app.listen(port, () => {
    console.log(`server listen on port ${port}`)
});