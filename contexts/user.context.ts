import React from "react"
import { User } from "../interfaces/User"


const UserContext = React.createContext<User>({
    username: "",
    email: "",
    userID: "",
    isAuth: false,
    token: ""
})

export { UserContext }