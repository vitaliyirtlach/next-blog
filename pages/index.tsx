import React from "react"
import { xhr } from "../axios/xhr"
import MainLayout from "../components/MainLayout/MainLayout"
import Posts from "../components/Posts/Posts"

const Home = (props: any) => {
    const add = async () => {
        try {
            const res = await xhr.post("/posts/add", {
                title: "tit",
                body: "body"
            })
            console.log(res.data)
        } catch(e) {
            console.log(e)
        }
    }

    return <MainLayout title="/">
        <div onClick={add}>Add post</div>
       <Posts posts={props.posts} />
    </MainLayout>
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