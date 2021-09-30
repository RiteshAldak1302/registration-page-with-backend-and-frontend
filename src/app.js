const express = require('express');
const app = express();
const path = require('path');
var hbs = require('hbs');
require('./db/conn')
var register = require('./modles/register_DB');
var port = process.env.PORT || 5500;
// this serving of static file should be before of app.get  
static_path = path.join(__dirname, '../public');
app.use(express.static(static_path));
app.use(express.urlencoded({extended:false}))

app.set('view engine', 'hbs');
views_path = path.join(__dirname, './templates/views');
partials_path = path.join(__dirname, './templates/partials');
app.set('views', views_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render('index');
})
app.get("/signup", (req, res) => {
    res.render('registration');
})
app.post("/signup", (req, res) => {
    // new object created by modle modelname is register
    var myData = new register(req.body)
    myData.save().then(()=>{res.send("You Successfully Registered")}).catch(()=>{res.status(404).send("you does not registered")});
    // alert('successfully submitted');
    res.status(200).render('registration.hbs');
})
app.get("/login", (req, res) => {
    res.render('login');
})


app.listen(port, () => {
    console.log(`Server Serve the File at port : ${port}`);
})