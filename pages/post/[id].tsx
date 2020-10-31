import { GetStaticPaths, GetStaticProps } from "next"
import React from "react"
import { xhr } from "../../axios/xhr"
import MainLayout from "../../components/MainLayout/MainLayout"
import { Post } from "../../interfaces/Post"
import PostStyles from "../../styles/post.module.scss"

const PostId: React.FC<Post> = ({_id, title, body}) => {
    return <MainLayout title={`/post/${_id}`}>
        <div className={PostStyles['post']}>
            <div className={PostStyles["title"]}>{title}</div>
            <div className={PostStyles["body"]}>{body}</div>
        </div>
    </MainLayout>
}

export const  getStaticProps: GetStaticProps = async (ctx: any) => {
    const res = await xhr.get(`/posts/${ctx.params.id}`)
    return {
        props: {
            _id: res.data._id,
            title: res.data.title,
            body: res.data.body
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await xhr.get("/posts/all")
    const posts: Post[] = await res.data
    const paths = posts.map(post => ({
        params: {id: post._id}
    }))

    return {
        paths,
        fallback: false
    }
}

export default PostId 