import React from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const NewUserForm = ({ values, touched, errors }) => {

    return(
        <div className="new-user-form">
            <Form>
                <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={values.name}
                />
                {touched.name && errors.name && <p>
                    {errors.name}</p>}

                <Field
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                />
                {touched.email && errors.email && <p>
                    {errors.email}</p>}

                <Field
                    type="text"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                />
                {touched.password && errors.password && <p>
                    {errors.password}</p>}

                <label>
                    Terms Of Service
                    <Field
                        type="checkbox"
                        name="tos"
                        checked={values.tos}
                    />
                    {touched.tos && errors.tos && <p>
                        {errors.tos}</p>}
                </label>

                <button type="submit">Submit</button>
            </Form>
        </div>
    );
};

const FormikNewUserForm = withFormik({
    mapPropsToValues({ name, email, password, tos }) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            tos: tos || false
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("Your name is required."),
        email: Yup.string().required("A valid email is required"),
        password: Yup.string().required("A password is required."),
        tos: Yup.boolean().oneOf([true], "You must accept the Terms of Service.")
    }),

    handleSubmit(values) {
        axios
            .post("https://reqres.in/api/users/", values)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }
})(NewUserForm);

export default FormikNewUserForm;