//HTTP module
//Request object
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end(`<a href='/about'>About Page</a>`)
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oooops!</h1>
    <p>Something went wrong on our side</p>
    <a href='/'>Link to homepage</a>`)
})


server.listen(3000)