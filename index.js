// import json-server
const jsonServer=require('json-server')

// create json server using json server-libary
const mediaPlayerServer=jsonServer.create()

// set up path/route for db.json file
const router=jsonServer.router("db.json")

// Returns middlewares used by json server
const middleware=jsonServer.defaults()

// set port for server app
const port=4000 || process.env.PORT

// use middleware and  router in server
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

// server should listen for request from frontend
mediaPlayerServer.listen(port,()=>{
    console.log(`media player server started at port ${port}, and waiting for client request !!!`);
})