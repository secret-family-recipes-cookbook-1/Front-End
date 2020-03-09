import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddRecipe = ({ errors, touched }) => {
  return (
    <Form>
      <Field type="text" name="title" placeholder="Title" />
      {touched.title && errors.title && <div>{errors.title}</div>}
      <br />
      <Field type="text" name="source" placeholder="Source" />
      {touched.source && errors.source && <div>{errors.source}</div>}
      <br />
      <Field as="select" name="category">
        <option disabled>Category:</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="dessert">Dessert</option>
        <option value="beverage">Beverage</option>
      </Field>
      {touched.category && errors.category && <div>{errors.category}</div>}
      <br />
      <Field
        as="textarea"
        type="text"
        name="ingredients"
        cols="50"
        rows="10"
        placeholder="Ingredients"
      />
      {touched.ingredients && errors.ingredients && (
        <div>{errors.ingredients}</div>
      )}
      <br />
      <Field
        as="textarea"
        type="text"
        name="instructions"
        cols="50"
        rows="10"
        placeholder="instructions to make your dish"
      />
      {touched.instructions && errors.instructions && (
        <div>{errors.instructions}</div>
      )}
      <br />
      <button type="submit">Submit Recipe</button>
    </Form>
  );
};

const FormikAddRecipe = withFormik({
  mapPropsToValues({ title, source, category, ingredients, instructions }) {
    return {
      title: title || "",
      source: source || "",
      ingredients: ingredients || "",
      instructions: instructions || "",
      category: category || "",
      user_id: parseInt(localStorage.getItem("userId"), 10)
    };
  },
  validationSchema: Yup.object().shape({
    title: Yup.string()
      .required("You must enter a title for your recipe.")
      .min(3, "Title too short."),
    source: Yup.string()
      .required("You must enter a source for your recipe.")
      .min(3, "Source name too short."),
    category: Yup.string().required("You must choose a category."),
    ingredients: Yup.string()
      .required("You must enter ingredients.")
      .min(10, "Ingredients too short."),
    instructions: Yup.string()
      .required("You must enter instructions for your recipe.")
      .min(10, "instructions too short.")
  }),
  handleSubmit(values, history) {
    axiosWithAuth()
      .post("/recipes", values)
      .then(res => {
        console.log("[--SUCCESS--][POST]: AddRecipe.js ~ ", res);
        history.push("/recipes");
      })
      .catch(err =>
        console.log("[#-ERROR-#][POST]: AddRecipe.js ~ ", values, err)
      );
  }
})(AddRecipe);

export default FormikAddRecipe;
