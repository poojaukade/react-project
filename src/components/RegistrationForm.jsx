import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));

    setSuccess("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Please enter a password.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must contain at least 8 characters.";
    }

    if (!formData.role) {
      newErrors.role = "Please select your role.";
    }

    if (!formData.terms) {
      newErrors.terms = "Please accept the terms and conditions.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log("Registration Data:", formData);

    setSuccess("Registration submitted successfully!");

    setFormData({
      name: "",
      email: "",
      password: "",
      role: "",
      terms: false,
    });
  }

  return (
    <section className="registration-section">
      <h2>Registration Form</h2>

      <p className="section-description">
        Practise controlled inputs and form validation.
      </p>

      <form onSubmit={handleSubmit} noValidate>

        <div className="form-field">
          <label htmlFor="name">Full Name</label>

          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          {errors.name && (
            <p className="error-message">{errors.name}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email Address</label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          {errors.email && (
            <p className="error-message">{errors.email}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="password">Password</label>

          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />

          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="role">Select Your Role</label>

          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="">Choose your role</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="student">Student</option>
          </select>

          {errors.role && (
            <p className="error-message">{errors.role}</p>
          )}
        </div>

        <div className="checkbox-field">
          <label>
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />

            I accept the terms and conditions.
          </label>

          {errors.terms && (
            <p className="error-message">{errors.terms}</p>
          )}
        </div>

        <button type="submit" className="primary-button">
          Register
        </button>

        {success && (
          <p className="success-message">{success}</p>
        )}

      </form>
    </section>
  );
}

export default RegistrationForm;