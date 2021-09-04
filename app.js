const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname + "/date.js")



const items = ["Buy Fish", "Fry Fish"," Eat Fish"]; 
const workitems =[];

const app = express();
app.use(express.urlencoded({extended:true}))

app.use(express.static("public"))

app.set('view engine', 'ejs');


app.get("/" , function(req, res){
    
      const day= date.getDate();
    
      res.render("list" , {listTitle: day  , newListItems : items  });
  
});


app.post("/" , function(req, res){

    const item = req.body.newItem;

    if (req.body.list==="work"){ 

        workitems.push(item);
        res.redirect("/work")

   }else{

        items.push(item);
        res.redirect("/")
   }   
})


app.get("/work", function(req, res){
    res.render("list", {listTitle: "work list " , newListItems : workitems})
})


app.get("/about", function(req,res){
    res.render("about")
})




app.post("/work",function(req , res){
     const item = req.body.newItem;
 
    workitems.push(item)

    res.redirect("/work")
    

})

app.listen(3000, function(){
    console.log("server started on port 3000");
});
