const { Router } = require("express")
const PostsRouter = Router()

PostsRouter.get("/all", (req, res) => {
    res.json({message: "Success from PostsRouter "})
})

module.exports = PostsRouter