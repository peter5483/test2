let express = require('express');
let router = express.Router();
let Fisheep = require('./Fisheep.js');
let Alice = require('./Alice.js');
let Bob = require('./Bob.js');
let test = require('./test.js');
router.get('/', (req, res) => {
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    }
    res.sendFile("index.html", options)
})
router.use('/Fisheep', Fisheep);
router.use('/Alice', Alice);
router.use('/Bob', Bob);
router.use('/test', test);

module.exports = router;