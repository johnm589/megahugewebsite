var express = require ("express"),
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
    app.get('/members', function(req, res) {
        res.render('pages/members');
    });
    app.get('/person1', function(req, res) {
        res.render('pages/person1');
    });
    app.get('/person2', function(req, res) {
          res.render('pages/person2');
    });
    app.get('/person3', function(req, res) {
            res.render('pages/person3');
    });
    app.get('/person4', function(req, res) {
            res.render('pages/person4');
    });

    app.listen(port, function() {
        console.log('Our app is running on http://localhost:' + port);
    });
