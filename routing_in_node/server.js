import http from  'http';

const server = http.createServer((req, res) => {
 if(req.url === '/'){
    res.write('Welcome to Home Screen');
    res.end();
  }
  else if(req.url === '/about'){
    res.write('Welcome to About Screen');
    res.end();
  }

  console.log(req.url);
  
});

const port = 3001;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
