const express = require('express');

const {FindAllProduct,NewMessage, addNewProduct, GetSpecifcProduct} = require('../controller/home.controller');

/* router object */
const router = express.Router();


/* all routes */

router.get("/",FindAllProduct);

router.get("/new", NewMessage);

router.get("/post",addNewProduct);

router.get("/:identity",GetSpecifcProduct);

module.exports = router;