import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Register = ({ errors, touched }) => {
  return (
    <Form>
      <Field type="text" name="firstName" placeholder="First name" />
      {touched.firstName && errors.firstName && <div>{errors.firstName}</div>}
      <br />
      <Field type="text" name="lastName" placeholder="Last name" />
      {touched.lastName && errors.lastName && <div>{errors.lastName}</div>}
      <br />
      <Field type="email" name="email" placeholder="Email" />
      {touched.email && errors.email && <div>{errors.email}</div>}
      <br />
      <Field type="password" name="password" placeholder="Password" />
      {touched.password && errors.password && <div>{errors.password}</div>}
      <br />
      <button type="submit">Register</button>
    </Form>
  );
};

const FormikRegister = withFormik({
  mapPropsToValues({ firstName, lastName, email, password }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .required("You must enter your first name.")
      .min(2, "First name must be at least two characters."),
    lastName: Yup.string()
      .required("You must enter your last name.")
      .min(2, "Last name must be at least two characters."),
    email: Yup.string()
      .required("You must enter a valid email.")
      .email(),
    password: Yup.string()
      .required("You must enter a password.")
      .min(6, "Password must be at least 6 characters.")
  }),
  handleSubmit(values) {
    console.log("Submitting values: ", values);
    axiosWithAuth()
      .post("/auth/register", values)
      .then(res => {
        console.log("Success!", res);
      })
      .catch(err => console.log(err.response));
  }
})(Register);

export default FormikRegister;
