const express = require('express');

const {FindAllProduct,NewMessage} = require('../controller/home.controller');

/* router object */
const router = express.Router();


/* all routes */

router.get("/",FindAllProduct);

router.get("/new", NewMessage)



module.exports = router;