const express = require('express');
const app = express();

const cors = require('cors');
const mongoose = require('mongoose');

const database = "LambdaBlogDb";
const unrestrictedRouter = "./unrestrictedRouter.js";
const restrictedRouter = "./restrictedRouter.js";

mongoose.connect(`mongodb://localhost:27017/${database}`)
  .then(() => {
    console.log(`Connected to ${database}`);
  })
  .catch(err => {
    console.log({Error: err.message});
  });

app.get('/', (req, res) => {
  res.send({api: "api working successfully!"});
});


const corsOptions = {
  credentials: true
};

app.use(express.json());
app.use(cors(corsOptions));

// app.use('/api/user', restrictedRouter);
// app.use('/api/posts', unrestrictedRouter);

const PORT = process.env.PORT || '5000';



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
