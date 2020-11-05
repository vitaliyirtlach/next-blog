const { Router } = require("express")
const User = require("../models/User.model")
const UserRouter = Router()

UserRouter.get("/profile/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json({ user })
    } catch(e) {
        res.status(400).json({error: "User is undefined!"})
    }
})

UserRouter.get("/all", async (req, res) => {
    try {
        let users = await User.find({})
        users = users.map(user => ({
            params: {
                userID: user._id
            }
        }))
        res.json(users)
    } catch(e) {
        res.status(400).json({error: "User is undefined!"})
    }
})



module.exports = UserRouter