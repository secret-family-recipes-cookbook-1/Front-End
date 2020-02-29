import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios"; 

const Login = ({ errors, touched }) => {
    return (
        <Form>
            <Field type="text" name="uid" placeholder="Username" />
            {touched.uid && errors.uid && <div>{errors.uid}</div>}
            <br />
            <Field type="password" name="password" placeholder="Password" />
            {touched.password && errors.password && <div>{errors.password}</div>}
            <br />
            <button type="submit">Log In</button>
        </Form>
    );
};

const FormikLogin = withFormik({
    mapPropsToValues({ uid, password }) {
        return {
            uid: uid || "",
            password: password || ""
        };
    },
    validationSchema: Yup.object().shape({
        uid: Yup.string()
            .required("You must enter your username.")
            .min(5, "Username must be at least 5 characters."),
        password: Yup.string()
            .required("You must enter your password.")
            .min(6, "Your password must be at least 6 characters.")
    }),
    handleSubmit(values, { resetForm }) {
        axios
            .post("https://reqres.in/api/users", values)
            .then(res => {
                console.log('Success!', res);
                resetForm();
            })
            .catch(err => console.log(err.response));
    }
})(Login);

export default FormikLogin;
