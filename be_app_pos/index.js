var express = require("express");
var app = express();
// var path = require('path');
// var md5 = require('md5');
// var uniqid = require('uniqid'); 
const path = __dirname + '/FE_APP/POS';
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const appRoute = require("./src/routes/route-barang");
// app.use('/',appRoute);
// app.set('view engine', 'js');

// app.set('views', 'FE_APP/POS/src');
// app.use(express.static(__dirname + 'FE_APP/POS'));
app.use(express.static(path));
// app.set('views', path.join(__dirname, 'FE_APP/POS/src'));
// app.engine('js', require('ejs').renderFile);
// app.set('view engine', 'js');
const cors = require("cors");
const port = 3000;
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_bootcamp'
})

// connection.connect()

// connection.query('SELECT * FROM t_barang', (err, rows, fields) => {
//   if (err) throw err

//   console.log('The solution is: ', rows[0])
// })

// connection.end()

app.get("/", function(req,res){
    res.send("WI Learning");
});

// app.get('/barang', function (req, res) {
//     let sql = "SELECT * FROM t_barang LEFT OUTER JOIN t_unit ON t_unit.id_unit = t_barang.id_unit";
//     connection.query(
//       sql,
//       function (error, data, fields) {
//         res.json({
//             status: 200,
//             data,
//             message: "User Barang retrieved successfully",
//         })
//         // error will be an Error if one occurred during the query
//         // results will contain the results of the query
//         // fields will contain information about the returned results fields (if any)
//       })
//   })

app.get("/info", function(req,res){
  res.render("./pages/test");
});

app.get("/testvue", function(req,res){
  res.render("main");
});
  app.use('/barang',(req,res) => {
    let sql = "SELECT * FROM t_barang LEFT OUTER JOIN t_unit ON t_unit.id_unit = t_barang.id_unit ";
    connection.query(
      sql,
      function (error, data, fields) {
        // merender file index.pug
    res.render('./pages/Barang/index', {title: 'Daftar Barang', barang: data});
      })
    
})

  app.get('/barang/:id', function (req, res) {
    let sql = "SELECT * FROM t_barang WHERE id_barang =" +req.params.id;
    connection.query(
      sql,
      function (error, data, fields) {
        res.json({
            status: 200,
            data,
            message: "User Barang retrieved successfully",
        })
       
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)
      })
  })

  app.get('/barang/:id/:qty', function (req, res) {
    let sql = "SELECT * FROM t_barang LEFT OUTER JOIN t_unit ON t_unit.id_unit = t_barang.id_unit WHERE t_barang.id_barang =" +req.params.id;
    connection.query(
      sql,
      function (error, data, fields) {
        res.send("<h4>Barang:"+ data[0].barang+" dengan jumlah "+req.params.qty+" "+data[0].unit+"</h4>");
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)
      })
  })

// app.get("/supplier/:id",(req,res)=>{
//     var idrandom = uniqid()+req.params.id + uniqid();
//     res.send("Supplier ID:"+ md5(idrandom))
// });

// app.get("/product/:id",(req,res)=>{
//     var idProduct = parseInt(req.params.id);
//     var data = [{
//         id_product : 10,
//         product_name : "Burger",
//         category:"food",
//         unit:"pcs"
//     },{
//         id_product : 20,
//         product_name : "Pizza",
//         category:"food",
//         unit:"pcs"
//     }];
//     var json = JSON.stringify(data);
//     let dataFind = data.find(o => o.id_product === idProduct);
//     res.send(dataFind!=null? dataFind.product_name:"Item Tidak Ada");
// });

app.get("/category/:category/:id",(req,res)=>{
    res.send("<h4>Category ID:"+ req.params.category+"</h4><h4>Product ID: "+req.params.id+"</h4>");
});


// app.use("/",(req,res)=>{
//     res.status(404);
//     res.sendFile('./404.html',{root: __dirname});
// });

app.listen(port, ()=>(
    console.log(`listening on port ${port}`)
));