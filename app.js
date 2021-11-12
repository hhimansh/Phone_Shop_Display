// requiring express
var express = require('express');
// requiring mysql
var mysql = require('mysql');
// requiring body_parser
var bodyParser = require('body-parser');

var app = express();


// this is configuring our express
app.set("view engine", "ejs");
// using the body parser
app.use(bodyParser.urlencoded({extended: true}));
// this is how express will know about app.css file beside putting <link> in ejs/ html file
app.use(express.static(__dirname + "/public"));

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	database : 'phone_shop'
});

app.get("/", function(req,res){
	console.log("someone requested us");
	res.render("home");
});

app.post("/son", function(req,res){
	var q = 'select description as des, price as price, in_stock as stock, rating as rate from phoneshop where name= "sony 98x"';
	connection.query(q, function(err,results){
		if(err) throw err;
		var des = results[0].des;
		var price = results[0].price;
		var stock = results[0].stock;
		var rate = results[0].rate;
		//console.log(des);
		res.render("device",{des : des, price : price, stock : stock, rate: rate});
	})
	
});


app.post("/sam", function(req,res){
	var q = "select description as des, price as price, in_stock as stock, rating as rate from phoneshop where name= 'Samsung' ";
	connection.query(q, function(err, results){
		if(err) throw err;
		var des = results[0].des;
		var price = results[0].price;
		var stock = results[0].stock;
		var rate = results[0].rate;
		res.render("device",{des : des, price : price, stock : stock, rate : rate});
	});
	
})


app.listen(3000, function(){
	console.log("Server running on port 3000");
});
