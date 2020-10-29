import React from "react"
import Link from "next/link"
import Head from "next/head"

export default function HeaderLayout({children, title}: any) {
    return <>
        <Head>
            <title>{title}</title>
        </Head>
        <header>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
        </header>
        {children}
    </>
}