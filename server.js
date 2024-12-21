const app = require('./src/app')
const http = require('http')
const server = http.createServer(app);

app.listen(3000,()=>{
    console.log("server is runing port 3000")
})
