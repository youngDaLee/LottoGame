var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
app.locals.pretty = true;
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));
app.use('/', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 동기식 mysql
var sync_mysql = require('sync-mysql');
var conn = new sync_mysql({
    host : 'localhost',
    user :'GoldPig',
    password : 'Dream',
    database : 'LottoGame'
});

var price = 0;
var input_num;

// 메인 화면
app.get(['/', '/lotto'], function(req, res) {
    price = 0;
    var sql = 'SELECT * FROM ranking ORDER BY price DESC';
    var ranking = conn.query(sql);
    var nicknames = [];
    var prices = [];
    var dates = [];
    console.log(ranking);
    for (var i = 0; i < ranking.length; i++) {
        nicknames.push(ranking[i].nickname);
        prices.push(ranking[i].price);
        dates.push(ranking[i].date);
    }
    res.render('index.html', { nicknames: nicknames, prices: prices, dates: dates });
});

app.post('/lotto', function(req, res) {
    input_num = req.body.num;
    console.log(input_num);
    var sql = 'SELECT * FROM lotto_info';
    const lotto_nums = conn.query(sql);
    for (var i = 0; i < lotto_nums.length; i++) {
        var cnt = 0;
        var bonus_correct = false;
        for (var j = 0; j < 6; j++) {
            if (input_num[j] == lotto_nums[i].num1) {
                cnt++;
            }
            if (input_num[j] == lotto_nums[i].num2) {
                cnt++;
            }
            if (input_num[j] == lotto_nums[i].num3) {
                cnt++;
            }
            if (input_num[j] == lotto_nums[i].num4) {
                cnt++;
            }
            if (input_num[j] == lotto_nums[i].num5) {
                cnt++;
            }
            if (input_num[j] == lotto_nums[i].num6) {
                cnt++;
            }
            if (input_num[j] == lotto_nums[i].bonus) {
                bonus_correct = true;
            }
        }
        if (cnt == 6) {
            price += lotto_nums[i].price1;
            console.log('1등');
        } else if (cnt == 5 && bonus_correct) {
            price += lotto_nums[i].price2;
            console.log('2등');
        } else if (cnt == 5) {
            price += lotto_nums[i].price3;
            console.log('3등');
        } else if (cnt == 4) {
            price += lotto_nums[i].price4;
            console.log('4등');
        } else if (cnt == 3) {
            price += lotto_nums[i].price5;
            console.log('5등');
        }
    }
    console.log(price + '원');
    res.render('showResult.html', { price: price });
});

app.get('/rank', function(req, res) {
    var nickname = req.query.nickname;
    console.log(nickname);
    var now = new Date();
    var date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
    var sql = 'INSERT INTO ranking (nickname, price, date) VALUE(?, ?, ?)';
    var params = [nickname, price, date];
    conn.query(sql, params, function(err) {
        if (err)
            console.log(err);
        else {
            console.log("Insert 성공!");
        }
    });
    sql = 'SELECT * FROM ranking ORDER BY price DESC';
    var ranking = conn.query(sql);
    var nicknames = [];
    var prices = [];
    var dates = [];
    console.log(ranking);
    for (var i = 0; i < ranking.length; i++) {
        nicknames.push(ranking[i].nickname);
        prices.push(ranking[i].price);
        dates.push(ranking[i].date);
    }
    res.render('showTotalRank.html', { nicknames: nicknames, prices: prices, dates: dates });
});

app.listen(app.get('port'), function() {
    console.log('Connected to ' + app.get('port') + ' port!');
});