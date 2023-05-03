// const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Distributor = require("./Distributorschema");
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://anusha:anusha@cluster0.1kulapy.mongodb.net/Wrizto?retryWrites=true&w=majority", { useNewUrlParser: true });

mongoose.connection.once("open", () => {
  console.log("Mongodb connection established successfully");
});

const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.post("/create", (req, res) => {
  const newData = new Distributor(req.body);
  Distributor
    .save()
    .then((newData) => {
      res.json(newData);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.get("/getdata",async(req,res)=>{
  try {
      const userdata = await Distributor.find();
      res.status(201).json(userdata)
      console.log(userdata);
  } catch (error) {
      res.status(422).json(error);
  }
})

app.get("/getuser/:id",async(req,res)=>{
  try {
      console.log(req.params);
      const {id} = req.params;

      const userindividual = await Distributor.findById({_id:id});
      console.log(userindividual);
      res.status(201).json(userindividual)

  } catch (error) {
      res.status(422).json(error);
  }
})
// update user data

app.patch("/updateuser/:id",async(req,res)=>{
  try {
      const {id} = req.params;

      const updateduser = await Distributor.findByIdAndUpdate(id,req.body,{
          new:true
      });

      console.log(updateduser);
      res.status(201).json(updateduser);

  } catch (error) {
      res.status(422).json(error);
  }
})
// delete user
app.delete("/deleteuser/:id",async(req,res)=>{
  try {
      const {id} = req.params;

      const deletuser = await Distributor.findByIdAndDelete({_id:id})
      console.log(deletuser);
      res.status(201).json(deletuser);

  } catch (error) {
      res.status(422).json(error);
  }
})





app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
