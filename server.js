var http = require('http')
var fs = require('fs')
var url = require('url')

var port = process.env.PORT || 8888; //bash设置端口：PORT=8001 node server.js

var server = http.createServer(function(request, response){
  
  var temp = url.parse(request.url,true)
  var path = temp.pathname
  var query = temp.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/


    if(path === '/'){
    let string = fs.readFileSync('./index.html','utf8')
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(string)
    response.end()
  }else if(path === '/main.js'){
    let string = fs.readFileSync('./main.js','utf8')
    response.statusCode = 200 
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
    response.write(string)
    response.end()
  }else if(path === '/zzz'){
    let string = fs.readFileSync('./main.js','utf8')
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/json;charset=utf-8')
    //CORS跨域方案：告诉浏览器不要阻止 http://mrli.com:8801
    response.setHeader('Access-Control-Allow-Origin', 'http://mrli.com:8801')
    response.write(`
    {
      "note":{
        "to": "张三",
        "from": "李四",
        "heading": "打招呼",
        "content": "hi"
      }    
    }  
    `)
    response.end()
  }else{
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`
    {
      "erro"r : "not found" 
    }  
    `)
    response.end()
  }

  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)
