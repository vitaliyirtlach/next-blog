import React, {FC, useEffect, useState} from "react"
import Link from "next/link"
import { IAuthor } from "../../../interfaces/Author"
import { xhr } from "../../../axios/xhr"
import UserPostStyles from "./UserPost.module.scss"


export const UserPost: FC<any> = ({post}) => {
    const [author, setAuthor] = useState<IAuthor>({
        username: "",
        userID: ""
    })
    const getAuthor = async (authorID: string) => {
        try {
            const {data} = await xhr.get(`/user/profile/${authorID}`)
            setAuthor( {
                username: data.user.username,
                userID: data.user._id 
            } )
        } catch(e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getAuthor(post.author)
    }, [getAuthor, post._id])

    return <div key={post._id} className={UserPostStyles['post']}>
        <div className={UserPostStyles['header']}>
            <div>
                <img src="/post.png" />
                <Link href={`/post/${post._id}`} as={`/post/${post._id}`}>{post.title}</Link>
            </div>
            <Link href={`/posts/${author.userID}`}>{author.username}</Link>
        </div>
        <div>{post.body.length < 600 ? post.body : post.body.slice(0, 598) + "..."}</div>
</div>
}