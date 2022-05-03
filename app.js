const express = require('express');

const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];

// allows use of req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     res.render('index', {foo: 'FOO' });
// });

app.get('/', function(req, res) {

    var today = new Date();

    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    var day = today.toLocaleDateString('en-US', options);

    res.render('list', {kindOfDay: day, newListItems: items}); 

    app.post('/', function(req, res) { // when a post request is triggered on home route, the value of newItem will be saved into variable called item and will redirect to the home route
        let item = req.body.newItem
        
        items.push(item);
        res.redirect('/');
    })
});

app.listen(3000, function(){
    console.log('Server listening on 3000.');
});