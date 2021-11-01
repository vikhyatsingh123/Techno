const express = require("express");
const path = require("path");
require("./db/conn");
const User = require("./models/usermessage");
const app = express();

const port=3000;

app.use(express.urlencoded({extended:false}));
const staticPath = path.join(__dirname,"../public");

 //app.use('./css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use(express.static(staticPath));
app.set("view engine", "hbs");

app.get("/",(req,res) => {
    res.render("index");
});

app.post("/", async (req, res) => {
  try {
    //res.send(req.body);
    const userData = new User(req.body);
    await userData.save();
    res.status(201).render("index");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, ()=>{
    console.log(`Successfully running port number ${port}`);
});