const express = require("express")
const next = require("next")
const bodyParser = require("body-parser")
const PostsRouter = require("./routes/PostsRouter")

const PORT = 5000 || process.env.PORT 
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
// const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(bodyParser.json())
    
    server.get("/", async (req, res) => {
        return app.render(req, res, "/", req.query)
    })
    
    server.use("/posts", PostsRouter)

    server.listen(PORT, (err) => {
        if (err) throw err
        console.log(`Server was started at ${PORT}`)
        return;
    })
})

