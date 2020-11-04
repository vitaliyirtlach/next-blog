import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import React from "react"
import { xhr } from "../../axios/xhr"
import MainLayout from "../../components/MainLayout/MainLayout"
import Posts from "../../components/Posts/Posts"
import { Post } from "../../interfaces/Post"

interface IUserPosts {
    posts: Post[]
}

const UserPosts: React.FC<IUserPosts> = ({posts}) => {
    const router = useRouter()
    return (
        <MainLayout title={`/posts/${router.query.userID}`}>
            <Posts posts={posts} />
        </MainLayout>
    )
}

export const getStaticPaths = async () => {
    const users = await xhr.get("/user/all")
    return {
        paths: users.data,
        fallback: false
    }
}
export const getStaticProps: GetStaticProps = async ({params}) => {
    const {data} = await xhr.get(`/posts/${params?.userID}`)
    return {
        props: {
            posts: data
        }
    }
}

export default UserPosts