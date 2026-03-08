import React, { Component } from "react";
import { withFormik } from "formik";

class StudentForm extends Component {
  render() {
    const { values, errors, touched, handleChange, handleBlur, handleSubmit, status } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.name && errors.name && <div>{errors.name}</div>}
          <br />
          <br />

          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && <div>{errors.email}</div>}
          <br />
          <br />

          <label>Qualification: </label>
          <input
            type="text"
            name="qualification"
            value={values.qualification}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.qualification && errors.qualification && <div>{errors.qualification}</div>}
          <br />
          <br />

          <button type="submit">Submit</button>
        </fieldset>

        {status && (
          <div className="output">
            <h2>Submitted Data</h2>
            <p>
              <strong>Name:</strong> {status.name}
            </p>
            <p>
              <strong>Email:</strong> {status.email}
            </p>
            <p>
              <strong>Qualification:</strong> {status.qualification}
            </p>
          </div>
        )}
      </form>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    qualification: ""
  }),

  validate: (values) => {
    const errors = {};
    if (!values.name) errors.name = "Name is required";
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.qualification) errors.qualification = "Qualification is required";
    return errors;
  },

  handleSubmit: (values, { setStatus }) => {
    setStatus(values);
  }
})(StudentForm);
