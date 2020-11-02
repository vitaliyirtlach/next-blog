import React from "react"
import { xhr } from "../axios/xhr"
import { useFormik } from "formik"
import MainLayout from "../components/MainLayout/MainLayout"
import { useRouter } from "next/dist/client/router"

const AddPost: React.FC<any> = (props) => {
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            title: "",
            body: ""
        },
        onSubmit: async (values) => {
            try {
                const res = await xhr.post("/posts/add", {
                    title: values.title,
                    body: values.body
                })
                router.push("/")
            } catch(e) { console.log(e) }
        }
    })  
    return (
        <MainLayout title="/add">
            <form onSubmit={formik.handleSubmit}>
                <input name="title" placeholder="Title for post" onChange={formik.handleChange} value={formik.values.title}/>
                <input name="body" placeholder="Body for post" onChange={formik.handleChange} value={formik.values.body}/>
                <button type="submit">Add post</button>
            </form>
        </MainLayout>
    )
}

export default AddPost