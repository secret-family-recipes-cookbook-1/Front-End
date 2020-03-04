import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Register = ({ errors, touched }) => {
  return (
    <Form>
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
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
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
