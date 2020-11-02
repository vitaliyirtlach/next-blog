import { useFormik } from "formik"
import React from "react"

const Login: React.FC = (props) => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async values => {

        }
    })
    return( <form onSubmit={formik.handleSubmit}>
        <input name="email" value={formik.values.email} onChange={formik.handleChange} />
        <input name="password" type="password" value={formik.values.password} onChange={formik.handleChange} />
        <button type="submit">Login</button>
    </form>)
}

export default Login