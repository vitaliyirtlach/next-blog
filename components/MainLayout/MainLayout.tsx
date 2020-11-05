import React, { useContext } from "react"
import Head from "next/head"
import Link from "next/link"
import { UserContext } from "../../contexts/user.context"
import { useRouter } from "next/router"

export default function MainLayout({children, title}: any) {
    const router = useRouter()
    const logoutHandler = () => {
        localStorage.removeItem("user-data")
        router.push("/signup")
    }
    const user = useContext(UserContext)
    return <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>
            <title>{title}</title>
        </Head>
        <header>
            <Link href="/" as="/">
                <span>next-blog</span>
            </Link>
            <div className="info">
                {
                <>
                    <Link href={`/posts/${user.userID}`}>My posts</Link>
                    <div>{user.username || "none"}</div>
                    <div onClick={logoutHandler}>Logout</div>    
                </> || 
                <>
                    <Link href="/signup">Sign Up</Link>
                    <Link href="/login">Login</Link>
                </>}
            </div>
        </header>
        <div className="content">
            {children}
        </div>
    </>
}