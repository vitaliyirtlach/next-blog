import React from "react"
import { xhr } from "../axios/xhr"
import HeaderLayout from "../components/HeaderLayout/HeaderLayout"

const Home = (props: any) => {
    return <HeaderLayout title="/">
        {JSON.stringify(props.posts, null, 4)}
    </HeaderLayout>
}

export const getStaticProps = async () => {
    const res = await xhr.get("/posts/all")
    const posts = await res.data
    return {
        props: {
            posts
        }
    } 
}

export default Home