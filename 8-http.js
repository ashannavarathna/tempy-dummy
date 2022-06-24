 const http = require('http');

  const server = http.createServer((req, res)=>{
      if(req.url === '/'){
          res.end('Welcome to our home page');
      }else if(req.url === '/about'){
          res.end('This is the about us page');
      }else{
        let res_text = '<h1>404, Oops!</h1>';
        res_text = res_text + '<p>The content you are looking for can  not seem to find!</p>';
        res_text =  res_text + '<a href="/">home</a>';
  
        res.end(res_text);
      }


  });

  server.listen(5000);
