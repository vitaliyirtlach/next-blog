import Link from "next/link"
import React from "react"
import { xhr } from "../axios/xhr"
import MainLayout from "../components/MainLayout/MainLayout"
import Posts from "../components/Posts/Posts"

const Home = (props: any) => {
    return (
    <MainLayout title="/">
        <Link href="/add">Add post</Link>
        <Posts posts={props.posts} />
    </MainLayout>)
}

export const getStaticProps = async () => {
    const res = await xhr.get("/posts/all")
    const posts = res.data
    return {
        props: {
            posts
        }
    } 
}

export default Home