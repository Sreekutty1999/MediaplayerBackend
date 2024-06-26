//1) import json server(its a library not server).
const jsonServer = require('json-server')//to import use 'require'

//2) create path for db.json file using router function -- for storing data.
const router = jsonServer.router("db.json")

//3) create middleware to convert json to js - defaults()
const middleware = jsonServer.defaults()

//4) create json server(its a server)
const mediaPlayerServer = jsonServer.create()

//5) server should use middleware and router
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)//first it will understand logic then it can be store to router

//6) set port for server (bcz if it have to application such as front and backend so it can be have same port number it will be clash so to set a different port no:)
const PORT = 3000 || process.env.PORT//to prevent clash and change the portal to next port.

//7) run server
mediaPlayerServer.listen(PORT,()=>{
    console.log(`server running sucessfully at port number ${PORT}`);
})