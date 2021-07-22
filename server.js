var express = require("express");
var app = express()


app.use(express.static(__dirname+'/public'))

var port = process.env.port || 3000;

const subNumbers = (a,b) =>{
    var a = parseInt(a)
    var b = parseInt(b)
    var result = a-b;
    return result;
    
}

app.get("/subTwoNumbers",(req,res) =>{
    var a = req.query.a;
    var b = req.query.b;
    var result = subNumbers(a,b)
    res.json({statuscode: 200, data: result, message:"Success"})
})


app.listen(port,()=>{
    console.log("The Application has started on port:",port)
})

