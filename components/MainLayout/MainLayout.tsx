import React from "react"
import Head from "next/head"
import Link from "next/link"

export default function HeaderLayout({children, title}: any) {
    return <>
        <Head>
            <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>
            <title>{title}</title>
        </Head>
        <header>
            <Link href="/" as="/">
                <span>next-blog</span>
            </Link>
            <div>
                <Link href="/signup">Sign Up</Link>
                <Link href="/login">Login</Link>
            </div>
        </header>
        <div className="content">
            {children}
        </div>
    </>
}