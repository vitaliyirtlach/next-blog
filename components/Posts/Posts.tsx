import React from "react"
import { Post } from "../../interfaces/Post"
import Link from "next/link"
import PostsStyles from "./Posts.module.scss"

interface PostsInterface {
    posts: Post[]
}
const Posts: React.FC<PostsInterface> = ({
    posts
}) => {
    return <div>
        { posts.map((post: Post) => (
             <div key={post._id} className={PostsStyles['post']}>
                <div className={PostsStyles['header']}>
                    <img src="/post.png" />
                    <Link href={`/post/${post._id}`} as={`/post/${post._id}`}>{post.title}</Link>
                </div>
                <div>{post.body.length < 600 ? post.body : post.body.slice(0, 598) + "..."}</div>
            </div>))}
    </div>
}

export default Posts