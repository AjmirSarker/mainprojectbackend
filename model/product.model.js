const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

  ProductId: {
    type: String,
    required: true,
  },
  
  Model: {
    type: String,
    required: true,
  },
  Brand: {
    type: String,
    required: true,
  },

  Identity: {
    type: String,
    required: true,
  },

  Price: {
    type: String,
    required: true,
  },

  Details: {
    type: String,
    required: true,
  },

  img1: {
    type: String,
    required: true,
  },

  img2: {
    type: String,
    required: true,
  },

  /* casing */
  Fan: {
    type: String,
  },
  Weight: {
    type: String,
  },
  Dimension:{
    type: String,
  },

  /* CPU */
  Cores: {
    type: String,
  },
  ClockSpeed: {
    type: String,
  },
  Threads: {
    type: String,
  },
  Cache: {
    type: String,
  },
  MemoryTypes: {
    type: String,
  },

  /* CPU COOLER */
  Speed: {
    type: String,
  },
  AirFlow: {
    type: String,
  },
  Socket: {
    type: String,
  },

  /* GPU */
  RecommendedPSU: {
    type: String,
  },
  MemoryClock: {
    type: String,
  },

  /* Keyboard */
  SystemRequirements:{
    type: String,
  },
  Hotleys: {
    type: String,
  },

  /* Monitor */
  DisplaySize: {
    type: String,
  },
  DisplayType: {
    type: String,
  },
  Resolution: {
    type: String,
  },
  RefreshRate: {
    type: String,
  },
  ResponseTime: {
    type: String,
  },

  /* MotherBoard */
  SupportedCPU: {
    type: String,
  },
  SupportedRAM: {
    type: String,
  },
  Base: {
    type: String,
  },
  Type: {
    type: String,
  },
  Chipset: {
    type: String,
  },
  MaximumMemory: {
    type: String,
  },
  Slots: {
    type: String,
  },

  /* Mouse */
  SensorResolution: {
    type: String,
  },
  
  /* Power Supply */
  Power: {
    type: String,
  },
  Input: {
    type: String,
  },
  Output: {
    type: String,
  },
  Fan: {
    type: String,
  },

  /* RAM */
  Capacity: {
    type: String,
  },
  Voltage: {
    type: String,
  },
  Frequency: {
    type: String,
  },

  Latency: {
    type: String,
  },
  
  Type: {
    type:String
  },

  /*ROM */
  Interface: {
    type: String,
  },
  
  /* Speaker */
  InputSensitivity: {
    type: String,
  },
  FrequencyResponse: {
    type: String,
  },

  /* SSD */
  Sequential_R_W: {
    type: String,
  },

  /* UPS */
  BackupTime: {
    type: String,
  }

  

},{
  timestamps: true,
});

productSchema.methods = {
  InsertProduct: (obj) => {
    const newProduct = mongoose.model("Product");
    return newProduct(obj);
  },
  GetAllProducts: () => {
    return mongoose.model("Product").find({})
      .sort({ createdAt: -1 })
      .exec();
    
  }
}

productSchema.statics = {
  FindByIdentity: function(name){
    return this.find({ Identity: { $regex: new RegExp(name, "i") } }) // Cpu or cpu or CPu all same case-insensitive
    .sort({ createdAt: -1 }).exec();
  }
}

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
