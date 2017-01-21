import express from 'express';
import request from 'request';
const app = express();
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.listen(4000);
console.log('runing @ 4000');
app.get('/', function(req, res) {
    res.render('index.html');
});


const Header = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};


app.get('/getjson', (req, res) => {
    request.get({
            url: 'http://www.json-generator.com/api/json/get/bZGVLxKmTC?indent=2',
            headers: Header,
        },
        function(error, response, body) {
            res.send(JSON.parse(body));
        });
    });
