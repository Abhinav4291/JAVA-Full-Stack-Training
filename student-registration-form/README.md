# Student Registration Form (React Assignment 03)

A React app that implements a Student Registration Form using a class component with Formik, plus a dark grey/red theme.

## Features

- Class-based form component with Formik HOC (`withFormik`)
- Fields: `name`, `email`, `qualification`
- Controlled form values through Formik `values`
- Validation for required fields and email format
- On submit, entered data is displayed below the form
- Dark theme (grey + red)

## Assignment Mapping

1. Build a Student Registration Form using a class component with Formik
- Implemented in `src/studentregistration.jsx`
- `class StudentForm extends Component`
- Exported with `withFormik({...})(StudentForm)`

2. Fields: name, email, qualification
- Inputs in `src/studentregistration.jsx` use `name="name"`, `name="email"`, `name="qualification"`

3. All fields controlled (bound to state)
- Controlled by Formik-managed state via `value={values.<field>}` and `onChange={handleChange}`

4. Use Formik for initial values
- `mapPropsToValues` returns initial values for all fields

5. Use Formik for validation
- `validate(values)` checks required fields and email regex format

6. Use Formik for submission handling (display entered data below form)
- `handleSubmit(values, { setStatus })` saves submitted values in Formik status
- Submitted values are rendered below the form in the `Submitted Data` section

## Project Structure

- `src/main.jsx` - React entry point
- `src/App.jsx` - page wrapper/layout
- `src/studentregistration.jsx` - form logic and Formik integration
- `src/styles.css` - dark theme styling

## Run Locally

```bash
npm install
npm run dev
```

Open the URL shown by Vite (typically `http://127.0.0.1:5173/`).
