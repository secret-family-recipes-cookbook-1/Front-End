import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Register = ({ values, errors, touched }) => {
    
    return (
        <Form>
            <Field type="text" name="fname" placeholder="First name" />
            {touched.fname && errors.fname && <div>{errors.fname}</div>}
            <br />
            <Field type="text" name="lname" placeholder="Last name" />
            {touched.lname && errors.lname && <div>{errors.lname}</div>}
            <br />
            <Field type="text" name ="uid" placeholder="Username" />
            {touched.uid && errors.uid && <div>{errors.uid}</div>}
            <br />
            <Field type="password" name="password" placeholder="Password" />
            {touched.password && errors.password && <div>{errors.password}</div>}
            <br />
            <Field type="password" name="passwordConfirmation" placeholder="Confirm password" />
            {touched.passwordConfirmation && errors.passwordConfirmation && <div>{errors.passwordConfirmation}</div>}
            <br />
            <button type="submit">Register</button>
        </Form>
    )
    }
const FormikRegister = withFormik({
    mapPropsToValues({ fname, lname, uid, password, passwordConfirmation }) {
        return {
            fname: fname || "",
            lname: lname || "",
            uid: uid || "",
            password: password || "",
            passwordConfirmation: passwordConfirmation || ""
        };
    },
    validationSchema: Yup.object().shape({
        fname: Yup.string()
            .required("You must enter your first name.")
            .min(2, "First name must be at least two characters."),
        lname: Yup.string()
            .required("You must enter your last name.")
            .min(2, "Last name must be at least two characters."),
        uid: Yup.string()
            .required("You must choose a username.")
            .min(5, "Username must be at least 5 characters."),
        password: Yup.string()
            .required("You must enter a password.")
            .min(6, "Password must be at least 6 characters."),
        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], "Passwords must match")
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
})(Register);

export default FormikRegister;