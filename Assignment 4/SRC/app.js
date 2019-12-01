//comment this section
const express = require('express'); // web api framework required for routing through server
const fileUpload = require('express-fileupload'); //Required to file uploads
const bodyParser = require('body-parser'); //Required to set up middleware
const mysql = require('mysql'); //Database required for stateful memory of api
const path = require('path'); //Required for working with file and directory paths
const app = express(); //Creating express app object

const port = 3000;
const {getHomePage} = require('./routes/index');
const {addproductPage, addproduct, deleteproduct, editproduct, editproductPage, prodByPrice, prodPricePage, prodCityPage, prodByCity} = require('./routes/product');
const db = mysql.createConnection ({
                                    host: 'localhost',  //setting host ip to be local machine ip
                                    user: 'root',       //setting database username
                                    password: 'password',   //setting database password
                                    database: 'grocerystore'}); //setting database name

// connect to database
db.connect((err) => { if (err) { throw err; } console.log('Connected to database'); });
global.db = db;



// Configure the middleware

app.set('port', process.env.port || port); //setting the port for express to local process port or program defined port
app.set('views', __dirname + '/views'); //setting views directory within express
app.set('view engine', 'ejs'); //setting type of view engine to ejs file
app.use(bodyParser.urlencoded({ extended: false })); //parsing the data with the querystring library
app.use(bodyParser.json()); //using JSON format for parsing
app.use(express.static(path.join(__dirname, 'public'))); //serving the static views files to public
app.use(fileUpload()); //making the express router use fileUpload

//comment this section
app.get('/', getHomePage); //Setting root directory to home page
app.get('/add', addproductPage); //setting add filepath to add product page
app.get('/edit/:productName', editproductPage); //setting edit page to edit product page
app.get('/delete/:productName', deleteproduct); //setting delete page to delete product page
app.post('/add', addproduct); //adding add product module to add page
app.post('/edit/:productName', editproduct); //adding edit product module to edit page
app.get('/prodPrice', prodPricePage); //setting product price page to edit product page
app.post('/prodPrice', prodByPrice); //adding products sorted by price module to edit product page
app.get('/prodSupplier', prodCityPage); //setting product suppiler path to product city page
app.post('/prodSupplier', prodByCity); //adding edit page to edit product page

// set the app to listen on the port
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
