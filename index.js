import http from "node:http"
import fs from "node:fs"
console.log('Happy developing ✨')
const server = http.createServer(function (request, response){
    fs.readFile("main.html", (_, data) => response.end(data))
    console.log(request)
    console.log("hello tst")
})
server.listen(3000, function (){console.log('Listening on port 3000')})