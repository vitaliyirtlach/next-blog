const { Router } = require("express")
const AuthRouter = Router()
const User = require("../models/User.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

AuthRouter.post("/signup", async (req, res) => {
    const { username, email, password } = req.body
    const sameEmail = await User.findOne({ email })
    if (sameEmail) return res.status(400).json({message: "Email was registered previously!"})
    const password_bcrypt = await bcrypt.hash(password, 12)
    const user = new User({
        username,
        email,
        password: password_bcrypt
    })
    await user.save()
    const token = jwt.sign({ userID: user.id }, "next-blog", { expiresIn: "14 days" })
    res.json({ user, token })
})


AuthRouter.post("/login", async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) res.status(400).json({error: "User is not found!"}) 
    const validPassword = await bcrypt.compare(password, user.password)
    if (validPassword) {
        const token = jwt.sign({ userID: user._id }, "next-blog", {expiresIn: "14 days"})
        res.json({user, token})
    } else {
        res.json({error: "Wrong password!"})
    }
})



module.exports = AuthRouter