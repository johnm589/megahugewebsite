var

    express = require ("express"),
    dateTime = new Date,
    utcDate= dateTime.toUTCString(),
    port = process.env.PORT || 3000;
    app = express();


    app.set('view engine', 'ejs');


    // index page
    app.get('/', function(req, res) {
        res.render('pages/home');
    });

    // about page
    app.get('/about', function(req, res) {
        res.render('pages/about');
    });
    app.get('/hearts', function(req, res) {
        res.render('pages/hearts');
    });
    app.get('/insulter', function(req, res) {
        res.render('pages/insulter');
    });


    app.listen(3000);
    console.log('goin down on port 3000');
