import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

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
            <Field as="textarea" type="text" name="ingredients" cols="50" rows="10" placeholder="Ingredients" />
            {touched.ingredients && errors.ingredients && <div>{errors.ingredients}</div>}
            <br />
            <Field as="textarea" type="text" name="body" cols="50" rows="6" placeholder="Description of dish, memories, etc (optional)" />
            {touched.body && errors.body && <div>{errors.body}</div>}
            <br />
            <Field as="textarea" type="text" name="steps" cols="50" rows="10" placeholder="Steps to make your dish" />
            {touched.steps && errors.steps && <div>{errors.steps}</div>}
            <br />
            <button type="submit">Submit Recipe</button>
        </Form>
    );
};

const FormikAddRecipe = withFormik({
    mapPropsToValues({ title, source, category, ingredients, body, steps }) {
        return {
            title: title || "",
            source: source || "",
            category: category || "",
            ingredients: ingredients || "",
            body: body || "",
            steps: steps || ""
        };
    },
    validationSchema: Yup.object().shape({
        title: Yup.string()
            .required("You must enter a title for your recipe.")
            .min(3, "Title too short."),
        source: Yup.string()
            .required("You must enter a source for your recipe.")
            .min(3, "Source name too short."),
        category: Yup.string()
            .required("You must choose a category."),
        ingredients: Yup.string()
            .required("You must enter ingredients.")
            .min(20, "Ingredients too short."),
        steps: Yup.string()
            .required("You must enter steps for your recipe.")
            .min(20, "Steps too short.")
    }),
    handleSubmit(values, { resetForm }) {
        axios
            .post("https://reqres.in/api/users", values)
            .then(res => {
                console.log('Success!', res);
                resetForm();
            })
            .catch(err => console.log(err.response))
    }
})(AddRecipe);

export default FormikAddRecipe;