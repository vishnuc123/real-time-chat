const express = require('express');
const router = express.Router();
router.use(express.urlencoded({ extended: true }));




router.post('/login', (req, res) => {
     let uname = req.body.username;
    res.redirect('/index')
    console.log(uname);
    
    
});

module.exports = router;
