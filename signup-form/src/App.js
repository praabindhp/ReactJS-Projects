import React, { useState } from "react";
import "./index.css";
import axios from "axios";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const handleFirstNameChange = (e) => {
    setValues({ ...values, firstName: e.target.value });
  }

  const handleLastNameChange = (e) => {
    setValues({ ...values, lastName: e.target.value });
  }

  const handleEmailChange = (e) => {
    setValues({ ...values, email: e.target.value });
  }

  const [valid, setValid] = useState(false);
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const createUser = (values) => axios.post('http://localhost:8080/register', {
    firstName: values.firstName,
    lastName: values.lastName,
    email: values.email
  })
    .then(response => {
      if (response.status === 200) {
        setStatus("Successfully 💖 Registered User To System");
      }
    })
    .catch(error => {
      setStatus("Please Check 😒 All Fields");
      console.log(error)
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
    createUser(values);
  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted ? <div class="success-message">{status}</div> : null}
        <input
          onChange={handleFirstNameChange}
          value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !valid ? <span id="first-name-error">Please Enter A First Name</span> : null}
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
          onChange={handleLastNameChange}
          value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !valid ? <span id="last-name-error">Please Enter A Last Name</span> : null}
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          onChange={handleEmailChange}
          value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !valid ? <span id="email-error">Please Enter An Email Address</span> : null}
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
