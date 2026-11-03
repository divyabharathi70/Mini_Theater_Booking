import http from 'http';
console.log(http);

const app=http.createServer()

 const port =process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})
