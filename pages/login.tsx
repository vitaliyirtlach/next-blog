import { useFormik } from "formik"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { xhr } from "../axios/xhr"

const Login: React.FC = (props) => {
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async values => {
            try {
                const {data} = await xhr.post("/auth/login", {
                    email: values.email,
                    password: values.password
                })
                localStorage.setItem("user-data", JSON.stringify({
                    userID: data.user._id,
                    token: data.token  
                }))
                router.push("/")
            } catch(e) {
                console.log(e)
            }
        }
    })
    return( 
    <>
        <Head>
            <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>
            <title>/login</title>
        </Head>
        <form onSubmit={formik.handleSubmit}>
            <input name="email" value={formik.values.email} onChange={formik.handleChange} />
            <input name="password" type="password" value={formik.values.password} onChange={formik.handleChange} />
            <Link href="/signup">Sign Up</Link>
            <button type="submit">Login</button>
        </form>
    </>)
}

export default Login