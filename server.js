const express = require("express")
const next = require("next")
const bodyParser = require("body-parser")
const PostsRouter = require("./routes/PostsRouter")
const mongoose = require("mongoose")
const cors  = require("cors")

const PORT = 5000 || process.env.PORT 
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })

app.prepare().then(() => {
    const server = express()
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(bodyParser.json())
    
    server.get("/", async (req, res) => {
        return app.render(req, res, "/", req.query)
    })
    if (dev) server.use(cors())
    server.use("/posts", PostsRouter)
    mongoose.connect("mongodb+srv://vitaliyirtlach:Vitaliy13@cluster0.uu6jx.mongodb.net/posts?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    }).catch(e => console.log(e))
    
    server.listen(PORT, (err) => {
        if (err) throw err
        console.log(`Server was started at ${PORT}`)
    })
})

