const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors())
//to host our website we keep port number in env filess
const port  = process.env.PORT || 5000;
const path = require("path");
const Register = require("./models/registers");
const { lazyrouter } = require("express/lib/application");
// require("./conn"); 
const Modal = require("./models/registers");
const mongoose = require("mongoose");
const { emitWarning } = require("process");
const pro = require("./models/registers");
const bodyParser = require('body-parser');


//connection to mongo db
const DB= "mongodb+srv://arjad:123@cluster0.lbunz.mongodb.net/freshfood-db?retryWrites=true&w=majority";
mongoose.connect(process.env.MONGODB_URI || DB, {
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true,
    // useFindAndModify:false
}).then(()=>{
    console.log("connected with mongo db");
})
.catch((e)=>{
    console.log(e, "error in connection ");
})

const static_path_of_index = path.join(__dirname, "../public");
app.use(express.json());//to handle json data
app.use(express.urlencoded({extended:false}));
app.use( express.static(static_path_of_index));

// Set EJS as templating engine 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set("view engine", "ejs");

//join path to upload folder to send all img files to upload folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


//file upload
const SingleFile = require('./file/singlefile');
const {upload} = require('./file/filehelper');

//set fie size
const fileSizeFormatter = (bytes, decimal) => {
    if(bytes === 0)
    {
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}

//file post 
app.post('/img/send', upload.single('file'),async (req, res, next) => {
    console.log("img post handler");
    try{
        const file = new SingleFile({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2) // 0.00
        });
        await file.save();
        res.status(201).send('File Uploaded Successfully');
    }
    catch(error) 
    {
        console.log("img post error = ", error);
        res.status(400).send(error.message);
    }
});

app.get('/img/read', async (req, res, next) => {
    console.log("img get handler");
    
    try{
        const files = await SingleFile.find();
        res.status(200).send(files);
    }
    catch(error) 
    {
        console.log("img get error = ",error);
        res.status(400).send(error.message);
    }
});



//home
app.get("/",(req,res)=>{
    res.send("backend home ")
})



/////////
// read data from db       run at port 5000
app.get("/food/read",async (req,res)=>{

    const r = await pro.find();
    res.send(r);
    console.log("================ DATA is Shown ========== ");
})

//////////
//get data from front end  & post to db
app.post("/food/insert",async (req,res)=>{
    console.log("food admin , req= ", req.body)    

    const {productname, productprice, productcat, bestoffer, productimg} = req.body;

    if(!productname || !productprice || !productcat || !bestoffer || !productimg)
    {
        console.log("Any Input value missing , so data cannot sent to DB");
        return res.status(200).json({error :" plz fill all field properly"});
    }
    try{
        const user = new Modal({productname, productprice, productcat, bestoffer, productimg});
        
        const data_entered = user.save();
        if(data_entered)
        {
            res.status(201).json({message:"data entered"})
            console.log("data entered");
        }
        else{
            res.status(500).json({error:"error to enter data"})
            console.log("data error");            
        }
    }
    catch(e)
    {
        console.log("INSERT ERRROR ! " , e);
    }
})

/////////
// update
app.put("/food/update", async (req,res)=>{

    const updated_name = req.body.updated_food_name;
    const updated_price = req.body.updated_food_price;
    const id = req.body.id;

    try{
        await pro.findById(id, (err, updated)=>{
            updated.productname = updated_name;
            updated.productprice= updated_price;
            updated.save();
            res.send("updated");

            console.log(" Food Updated = ", updated);            
         })
    }
    catch(e)
    {
        console.log(" UPDATE Error !" , e);
    }
})


app.delete('/food/delete/:id',async  function(req, res) {

    const id = req.params.id;
    await pro.findByIdAndRemove(id).exec();

    res.send("Deleted");
    console.log("Food DELETED ");
  
});
app.listen(port ,()=>{
    console.log(`server is running at port no at ${port}`);
})