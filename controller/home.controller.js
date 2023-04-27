/* load requried models */

/* load dependencies, external files */

const FindAllProduct = (req, res, next) => {

  res.send("Fetching all products...");
}

const NewMessage = (req, res, next) => {
  
    res.send("This is a new product");
  
}

module.exports = {
  FindAllProduct,
  NewMessage
}