const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain')
        res.end('hello, iced tea')
    } else if (req.url === '/iced-tea') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain')
        res.end('thanks for ordering iced tea, its so hot outside')
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain')
        res.end('404 not found')
    }
})

server.listen(port, hostname, () => {
    console.log(`server is listening at http://${hostname}:${port}`)
})
