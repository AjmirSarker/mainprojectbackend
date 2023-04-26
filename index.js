const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

// JWT start
// function verifyJWT(req, res, next) {
//   const authHeader = req.headers.authorization;
//   if (!authHeader) {
//     return res.status(401).send({ message: 'Unauthorized access' });
//   }
//   const token = authHeader.split(' ')[1];
//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(403).send({ message: 'Forbidden access' });
//     }
//     req.decoded = decoded;
//     next();
//   });
// }
// JWT end

// connect to mongodb start
const uri = `mongodb+srv://arafat1513512:chqApUsR4C21ybi4@cluster0.wqvy7hu.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});
// connect to mongodb end

async function run() {
  try {
    await client.connect();
    const itemCollection = client.db('MainProject').collection('products');

    console.log('DB Connected');
    app.get('/items', async (req, res) => {
      const query = {};
      const cursor = itemCollection.find(query);
      const items = await cursor.toArray();
      console.log(items);
      res.send(items);
    });
  } finally {
  }
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Server Running');
});

app.listen(port, () => {
  console.log('Listening to port', port);
});
