const express = require('express')
var cors = require('cors');
var fs = require('fs');

const app = express()
app.use(cors());
app.use(express.static(__dirname+'\\html'));

//const ctrl = require("./about");

console.log("처음 시작 : "+__dirname);

/*
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/new.html');
  });
  */
// Set the view engine to EJS
//app.set('view engine', 'ejs');

// 해당하는 이미지호출
app.get('/pic/:Pname', (req, res) => {
  const {Pname} = req.params;
  console.log("이미지 호출 : "+Pname);
  if(fs.existsSync(__dirname+`\\html\\img\\${Pname}.png`)){
    fs.readFile(__dirname+`\\html\\img\\${Pname}.png`, function(error, data){
      res.end(data);
    });
  }else{
    //디폴트 이미지 뿌려주기
    fs.readFile(__dirname+"\\html\\img\\PrepareImage.png", function(error, data){
      res.end(data);
    });
  }
 
  //const imagePath = `..\\html\\img\\${Pname}.png`; // Replace with the actual path to your image file
  //console.log("이미지 호출 : "+imagePath);
  //res.render('index', { imagePath });
});

/*
 //해당하는 이미지불러오기
  app.get('/pic/:Pname', (req, res) => {
    const {Pname} = req.params;
    console.log("이미지 호출 : "+Pname);
    console.log(`\\html\\img\\${Pname}.png`);
    res.sendFile(`html\\img\\${Pname}.png`);
  });
 */



  // index에서 모든 화면 이동 구현
  app.get('/:name', function (req, res) {
    const { name }=req.params;
    console.log("받은 값 : "+name); // 사용자가 던진 URL을 이런식으로 받을 수 있구나

    fs.readFile(__dirname+`\\html\\${name}.html`, function(error, data){
        console.log(__dirname);
        console.log(name+"접근");
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    })
  });

  //app.get('/image', ctrl.Love);


/*
app.get('/', function (req, res) {
    console.log(req.url); // 사용자가 던진 URL을 이런식으로 받을 수 있구나

    //console.log("확인");
    //console.log(__dirname); // 절대경로를 표시해줄 수 있어
    //res.set('Content-Type', 'text/html');
    //res.send('<h1>Hello, World!</h1>');

    fs.readFile("..\\html\\index.html", function(error, data){
        console.log(__dirname);
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    })
    
    //res.writeHead(200, {'Content-Type' : 'text/html'});
    //res.end(fs.readFileSync(__dirname+"\\View\\index.html","utf8"));


  //res.send('Hello World')
  //res.send("html\index.html");
  /*
  fs.readFile('D:\\웹사이트 구축\\예시\\Restoran Free Website Template - Free-CSS.com\\bootstrap-restaurant-template\\index.html', function(error, data){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(data);
  })

  }); //여기만 짜르자
  */

  //res.send("D:\웹사이트 구축\예시\Restoran Free Website Template - Free-CSS.com\bootstrap-restaurant-template/index.html");

  



/*
app.get('/user/:id', function (req, res) {
    //res.send('Hello World')
    //const q =req.params;
    // console.log(q.id);

    // 이거 쿼리로할꺼면 이거를 ?q= ~~ 이런식으로 던저야 한다.
    const q = req.query;
    console.log(q);
    res.json({'userID' : q});
})
*/


app.get('/sound/:name', function (req, res) {
    const { name }=req.params;
    if(name =="dog"){
        res.json({"sound" : "멍멍"});
    } else if(name =="cat"){
        res.json({"sound" : "야옹"});
    } else if(name =="pig"){
        res.json({"sound" : "꿀꿀"});
    } else{
        res.json({"sound" : "Undifinded"});
    }
});
  

app.listen(3000)