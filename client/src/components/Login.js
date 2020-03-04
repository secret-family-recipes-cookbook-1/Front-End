import React from "react";
import { useHistory } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = ({ errors, touched }) => {
	return (
		<Form>
			<Field type='email' name='email' placeholder='Email' />
			{touched.email && errors.email && <div>{errors.email}</div>}
			<br />
			<Field type='password' name='password' placeholder='Password' />
			{touched.password && errors.password && <div>{errors.password}</div>}
			<br />
			<button type='submit'>Login</button>
		</Form>
	);
};

const FormikLogin = withFormik({
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
      .min(4, "Password must be at least 6 characters.")
  }),
  handleSubmit(values) {
    console.log("Submitting values: ", values);
    axiosWithAuth()
      .post("/auth/login", values)
      .then(res => {
        // localStorage.setItem("token", res.data.payload);
        console.log("Response From Login: ", res);
        // const history = useHistory();
        // history.push('/recipe/0');
      })
      .catch(err => {
        localStorage.removeItem("token");
        console.log("Error From Login: ", err);
      });
  }
})(Login);

export default FormikLogin;
