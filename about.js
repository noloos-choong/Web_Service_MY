
const Love = (req, res) => {
  const { name }=req.params;
    console.log("ABOUT에서 받은 값 : "+name);

};

module.exports = {
  Love
};
/*
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/new.html');
  });
  */

  /*
  app.get('/image', (req, res) => {
    console.log("누가 먼저 반응하느거야>");
    res.sendFile(__dirname + '/html/img/about-2.jpg');
  });

  app.listen(3000)
*/


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
});
*/
    //res.writeHead(200, {'Content-Type' : 'text/html'});
    //res.end(fs.readFileSync(__dirname+"\\View\\index.html","utf8"));


  //res.send('Hello World')
  //res.send("html\index.html");
  /*
  fs.readFile('D:\\웹사이트 구축\\예시\\Restoran Free Website Template - Free-CSS.com\\bootstrap-restaurant-template\\index.html', function(error, data){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(data);
  })
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

/*
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
})
  */

