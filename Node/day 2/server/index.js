import http from 'http' 

const app = http .createServer()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})