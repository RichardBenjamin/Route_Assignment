const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const ListRoutes = require("./routes");

app.use(bodyParser.json());
app.use(ListRoutes);

app.get("/", (req,res)=>{
    return res.json("Start with /items");
});

app.listen(900, ()=>{
    console.log("The server has started");
})



