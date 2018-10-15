/*
This is going to be my first web server / client information
*/

const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

let app = express();

//hbs.registerPartial(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req,res, next) => {
let now = new Date().toString();
let log = `${now}: ${req.method} ${req.url}`;
console.log(log);

fs.appendFile('server.log', log + '\n', (err) => {

    if (err) {
        console.log('unable to append to the file');
    }
    next();
}
);


});


app.use((req, res, next) => {
    res.render('maintenance.hbs');

});

/*
//Using app will needing the URL, but we are using a local server for the Web Server
app.get('/', (req, res) => {
    //res.send('<h1>Hello Ufo Express!!<h1>');

    res.send({
        name: 'Ufuoma Okoro',
        Hobby: [
            'Coding',
            'Watching TV'
        ]

    });

});

*/

/*
    app.get('/about', (req, res) => {
        res.render('about.hbs', {
            pageTitle: 'About Page',
            currentYear: new Date().getFullYear() 
        });
    });

*/

//Rendering a new home Welcome page


app.get('/', (req, res) => {
    res.render('home.hbs', {
        welcomePage: 'Home Page',
        greeting:   'You are welcome here!!!',
        currentYear: new Date().getFullYear(),
       
    });
});



    app.get('/bad', (req, res) => {
        res.send({
            Crime:  'This is unaceptable'

        });

    });



app.listen(3000, () => {

    console.log(' Server running on port 3000');
});
