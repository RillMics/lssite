import http from "node:http"
import fs from "node:fs"
console.log('Happy developing ✨')
const server = http.createServer(function (request, response){
    response.setHeader("Content-Type", "text/html; charset=utf-8")
    fs.readFile("main.html", (_, data) => response.end(data))
    response.end()
    console.log(request.url)
})
server.listen(3000, function (){console.log('Listening on port 3000')})