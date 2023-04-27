const express = require('express');

const router = express.Router();

router.get("/:id",(req,res,next) => {
  console.log(req.params.id);
  res.send('The user id is ' + req.params.id);
})

router.get("/:id/new", (req, res, next) =>{
  res.send('This is a new user');
  res.end();
})



module.exports = router
