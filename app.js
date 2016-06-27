var

    express = require ("express"),
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


    app.listen(port, function() {
        console.log('Our app is running on http://localhost:' + port);
    });
