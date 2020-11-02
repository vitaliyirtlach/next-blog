const { Router } = require("express")
const PostsRouter = Router()
const Post = require("../models/Post.model")

PostsRouter.get("/all", async (req, res) => {
    const posts = await Post.find({})
    posts.reverse()
    res.json(posts)
})

PostsRouter.get("/:id", async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id })
    res.json(post)
})


PostsRouter.post("/add", async (req, res) => {
    const {body, title} = req.body
    const post = new Post({ title, body })
    await post.save()
    res.json({message: "Post was added"})
})

module.exports = PostsRouter