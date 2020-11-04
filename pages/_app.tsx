import React, { useEffect, useState } from "react"
import type { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar';
import { UserContext } from "../contexts/user.context";
// Styles
import "../styles/global.scss"
import {useRouter} from "next/router"
import { User } from "../interfaces/User";
import { xhr } from "../axios/xhr";
import { AxiosResponse } from "axios";


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [user, setUser] = useState<User>({
    isAuth: false,
    username: "",
    userID: "",
    email: "",
    token: ""
  })
  const getProfile = async () => {
    try {  
      let item = localStorage.getItem("user-data")
      const data = JSON.parse(String(item))
      console.log(data)
      if (data) {
          const res: AxiosResponse = await xhr.get(`/user/profile/${data.userID}`)
          const {user} = res.data
          setUser({
            isAuth: true,
            username: user.username,
            userID: user._id,
            email: user.email,
            token: data.token
          })
      } else throw new Error("Data is not defined")
    } catch(e) {
      router.push("/signup")
    }
  }
  useEffect(() => {
    getProfile()
  }, [])
  

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
