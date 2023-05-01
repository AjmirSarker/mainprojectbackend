/* load requried models */
const ProductModel = require('../model/product.model');
/* load dependencies, external files */
const {CreateError} = require('../helper/CreateError');

const FindAllProduct = (req, res, next) => {

  // try {
    // const data = await new ProductModel().GetAllProducts();
  //  res.send(data);
  // } catch (error) {
  //   next(CreateError(error));
  // }
  new ProductModel().GetAllProducts()
  .then((products) => {
    res.send(products)
  })
  .catch((err) => {
    next(CreateError(err))
  })
  
}

const NewMessage = (req, res, next) => {
  
    res.send("This is a new product");
  
}

const addNewProduct = (req, res, next) => {

  const SingleCasing = {
    "Model": "Golden Field F22B ATX Desktop Case",
    "Fan": "80MM fan at rear side.",
    "Price": "2200",
    "Brand": "Golden Field",
    "Weight": "4.6 KG",
    "Details": "Solid mechanical structure,Dual USB 2.0, audio ports and the front, easy access",
    "Dimension": "373x182x415mm",
    "Identity": "Casing",
    "ProductId": "1001",
    "img1": "https://i.ibb.co/YdLXgcD/Golden-Field-F22-B-ATX-Desktop-Case-1.png",
    "img2": "https://i.ibb.co/vjVSNN5/Golden-Field-F22-B-ATX-Desktop-Case-2.png"
  }

  

  try {
    const newProduct = new ProductModel().InsertProduct(SingleCasing);
    newProduct.save();

    res.send("New Product saved successfully");
  } catch (error) {
    console.log(error);
  }
}


const GetSpecifcProduct = async (req, res,next) => {
  
  try {
      const Identity = req.params.identity;
      const data = await ProductModel.FindByIdentity(Identity);
      res.send(data);
  } catch (error) {
    next(CreateError(error));
  }
}

module.exports = {
  FindAllProduct,
  NewMessage,
  addNewProduct,
  GetSpecifcProduct
}