const mongoose = require('mongoose');


const connect = () => {

  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.LOCAL_DB,{ //mongodb://localhost:27017/pcparts
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connection Established Successfully`);
  })
  .catch((err) => console.log(err));

  // mongoose.connection.on("disconnected", () => {
  //   console.log("Connection Disconnected or Interrupted");
  // })
}

module.exports = {
  connect
}