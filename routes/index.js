const express = require("express");
const router = express.Router();

const shopping_List = [
    {
        fruit: "banana",
        price: 600
    },

    {
        fruit: "apple",
        price: 300
    },
    {
        fruit: "orange",
        price: 100
    }
]

router.route("/items").get((req, res) =>{
    return res.json(shopping_List)
})
.post((req, res)=>{
    shopping_List.push(req.body)
    return res.json("Added new item")
})

router.route('/items/:fruit').get((req, res) => {
    const itemId = req.params.fruit;
    const item = shopping_List.find((i) => i.fruit === itemId);
  
    if (!item) {
      res.status(404).json({ message: 'Item not found' });
    } else {
      res.json(item);
    }
  }).patch((req, res) =>{
    const itemId = req.params.fruit;
    const item = shopping_List.find((i) => i.fruit === itemId);
    item.itemId = req.body
    return res.json("item has been updated")
}). delete((req, res) =>{
    const itemId = req.params.fruit;
    const itemIndex = shopping_List.findIndex((i) => i.fruit === itemId);
    shopping_List.splice(itemIndex, 1)
    return res.json("Item has been deleted")
})

module.exports = router;

