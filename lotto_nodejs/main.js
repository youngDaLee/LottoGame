var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var http = require('http');
var app = express();
app.locals.pretty = true;
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use('/', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 3000);

var sync_mysql = require('sync-mysql');
var conn = new sync_mysql({
    host : 'localhost',
    user :'lotto_user',
    password : 'lotto123',
    database : 'lotto_info'
});

app.get('/', function(req, res){
    res.redirect('/index.html');
});

app.get('/lotto', function(req, res){
    var sql = 'SELECT * FROM lotto';
    var info = conn.query(sql);
    var auto_num = [6, 14, 26, 28, 32, 33, 42]; 
    var price = 0;
    //console.log(info.length);
    for (var i = 0; i<info.length; i++) {
        var total = 0;
        var bonus = false;
        for (var j = 0; j<6; j++) {
            //console.log(auto_num[j], info[j].num1);
            if (auto_num[j] == info[i].num1){
                total++;
            }
            if (auto_num[j] == info[i].num2){
                total++;}
            if (auto_num[j] == info[i].num3){
                total++;}                
            if (auto_num[j] == info[i].num4){
                total++;}    
            if (auto_num[j] == info[i].num5){
                total++;}
            if (auto_num[j] == info[i].num6){
                total++;}  
            if (auto_num[j] == info[i].bonus){
                bonus = true;}          
        }
        //console.log(total);
        if (total == 6) {
            price += info[i].price1;
        }
        else if (total == 5 && bonus == true) {
            price += info[i].price2;
        }
        else if (total == 5) {
            price += info[i].price3;
        }
        else if (total == 4) {
            price += info[i].price4;
        }
        else if (total == 3) {
            price += info[i].price3;
        }
    }
    console.log(price);
    res.redirect('/index.html');

});


http.createServer(app).listen(app.get('port'), function(){
    console.log('서버 시작');
});