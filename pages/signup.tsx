import { useFormik } from "formik"
import React, { useState } from "react"
import { xhr } from "../axios/xhr"
import styled from 'styled-components';

const SignUp: React.FC = (props) => {
    const Error = styled.div`
        color: red;
        font-size: 1em;
    `
    const [error, setError] = useState("")
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        onSubmit: async values => {
            try {
                const {data: {token, user}} = await xhr.post("/auth/signup", {
                    username: values.username,
                    email: values.email,
                    password: values.password,
                })
                localStorage.setItem("user-data", JSON.stringify({
                    token, userID: user._id
                }))
            } catch(e) {
                console.log(e)
                setError(e.response.data.message)
            }   
        }
    })
    return( 
    <form onSubmit={formik.handleSubmit}>
        {error && <Error>!{error}</Error>}
        <input name="username" placeholder="username" value={formik.values.username} onChange={formik.handleChange} />
        <input name="email" placeholder="email" value={formik.values.email} onChange={formik.handleChange} />
        <input name="password" placeholder="password" type="password" value={formik.values.password} onChange={formik.handleChange} />
        <button type="submit">Sign Up!</button>
    </form>)
}

export default SignUp