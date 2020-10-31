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
                <span>{">"} vitaliyirtlach</span>
            </Link>
            <div>
                <Link href="https://github.com/vitaliyirtlach">
                    <img className="social-media-icon" src="/icons/github.png" />
                </Link>
                
                <Link href="https://www.instagram.com/w13vitaliy/">
                    <img className="social-media-icon" src="/icons/instagram.png" />
                </Link>

                <Link href="https://twitter.com/w13vitaliy">
                    <img className="social-media-icon" src="/icons/twitter.png" />
                </Link>

                <Link href="https://www.facebook.com/vitaliyirtlach/">
                    <img className="social-media-icon" src="/icons/facebook.png" />
                </Link>
            </div>
        </header>
        <div className="content">
            {children}
        </div>
    </>
}