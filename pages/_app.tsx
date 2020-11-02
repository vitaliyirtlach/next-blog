import React, { useState } from "react"
import type { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar';
import { UserContext } from "../contexts/user.context";
// Styles
import "../styles/global.scss"
import { User } from "../interfaces/User";


function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User>({
    isAuth: false,
    username: "",
    userID: "",
    email: "",
    token: ""
  })
  const getProfile = () => {
      let item = localStorage.getItem("user-data")
      const data = JSON.parse(String(item))
      console.log(data)
  }
  getProfile()

  return ( 
  <UserContext.Provider value={{
    isAuth: user.isAuth,
    username: user.username,
    userID: user.userID,
    email: user.email,
    token: user.token
  }}>
      <NextNprogress color=" #ffac33" startPosition={0.3} stopDelayMs={200} height={3} />
      <Component {...pageProps} />
  </UserContext.Provider>)
}

export default MyApp
