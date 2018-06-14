var express = require("express");

var app = express();
app.get("/",function(req,res){
res.send("welcode to my assignment!!!");
});



app.get("/speak/:name",function(req,res){
    console.log(req.params);
    var animal=req.params.name;
    if (animal === "pig") {
        res.send("pig says oink");
    } else if(animal === "cow") {
        res.send("cow says moooow");  
    }
    else if (animal==="dog") {
        res.send("dog says woof woof");
    }
// res.send("wow,it worked  "+names+ "wow");
});


app.get("/repeat/:str/:no",function(req,res) {
   var strng= req.params.str;
   var num=Number(req.params.no);  
     console.log(num);
     var result;
    for (let i = 0; i <= num; i++) {
     result += strng + " ";
    }
    res.send(result) ;  
    
});





app.get("*",function(req,res){
    console.log(req.route);
    res.send("sorry, page not found ... what are you doing with your life !!!");
});

app.listen(3000,function() {
   console.log("SERVING AT PORT 3000");
    
});