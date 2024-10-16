const http = require("http")

function requestController() {
    //lógica de nuestra función
    console.log("Hola Mundo!!!")
}

//configurar nuestro servidor
const server = http.createServer(requestController)

server.listen(4000)

//const http = require("http")