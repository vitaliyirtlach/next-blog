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

})

module.exports = AuthRouter