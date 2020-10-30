import Link from "next/link"
import React from "react"

export default function custom404() {
    return <>
        <h1>Page not found 404</h1>
        <Link href="/">Back to home</Link>
    </>
}