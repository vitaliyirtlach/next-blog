import React from "react"
import { Post } from "../../interfaces/Post"
import { UserPost } from "./UserPost/UserPost"

interface PostsInterface {
    posts: Post[]
}
const Posts: React.FC<PostsInterface> = ({ posts }) => {
    if (posts.length) return <div> { posts.map((post: Post) => <UserPost post={post} />) } </div>
    return <div>List of posts is Empty</div>
}

export default Posts