const mongoose = require("mongoose");

//it show error if it is required but not entered
const proSchema = new mongoose.Schema({
    productname:{
        type:String,
    },
    productprice:{
        type:String,
    },
    productcat:{
        type:String,
    },
    bestoffer:
    {
        type:String,
    },
    productimg:{
        data:Buffer,
        contentType:String
    },
})

//now create collection
const pro = new mongoose.model("freshfood-col", proSchema);
module.exports = pro;