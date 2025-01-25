import { useState } from "react";
import "./employeeForm.css";
import { validateData, MAX_DATE } from "../utils";
import FormField from "./FormField";

const EmployeeForm = () => {
  // employeeData state to store form data
  const [employeeData, setEmployeeData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    hobbies: "",
    address: "",
  });

  // formError state to store errors
  const [formError, setFormError] = useState({});

  // handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateData(employeeData);

    if (Object.keys(validationErrors).length > 0) {
      setFormError(validationErrors);
      alert("Mandatory field(s) missing.");
    } else {
      setFormError({});
      console.log("Form Data:", employeeData);
      alert("Data is saved.");
    }
  };

  // handling field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  return (
    <div className="form-container">
      <h1>Employee Form</h1>
      <form onSubmit={handleSubmit}>
        <p>
          Fields marked with <span className="required">*</span> are mandatory.
        </p>

        {/* Name Fields */}
        <FormField
          label="First Name"
          name="firstName"
          type="text"
          value={employeeData.firstName}
          onChange={handleChange}
          placeholder="Enter First Name"
          error={formError.firstName}
          required
        />
        <FormField
          label="Middle Name"
          name="middleName"
          type="text"
          value={employeeData.middleName}
          onChange={handleChange}
          placeholder="Enter Middle Name"
        />
        <FormField
          label="Last Name"
          name="lastName"
          type="text"
          value={employeeData.lastName}
          onChange={handleChange}
          placeholder="Enter Last Name"
          error={formError.lastName}
          required
        />

        {/* Date of Birth Field */}
        <FormField
          label="Date of Birth"
          name="dateOfBirth"
          type="date"
          value={employeeData.dateOfBirth}
          onChange={handleChange}
          placeholder="Enter Date of Birth"
          error={formError.dateOfBirth}
          max={MAX_DATE}
          required
        />

        {/* Phone Number Field */}
        <FormField
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          value={employeeData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter 10-digit Phone Number"
          error={formError.phoneNumber}
          required
        />

        {/* Email Field */}
        <FormField
          label="Email"
          name="email"
          type="email"
          value={employeeData.email}
          onChange={handleChange}
          placeholder="Enter Email Address"
          error={formError.email}
          required
        />

        {/* Hobbies Field */}
        <FormField
          label="Hobbies"
          name="hobbies"
          type="text"
          value={employeeData.hobbies}
          onChange={handleChange}
          placeholder="Enter Hobbies"
        />

        {/* Address Field */}
        <FormField
          label="Address"
          name="address"
          type="textarea"
          value={employeeData.address}
          onChange={handleChange}
          placeholder="Enter Address (max 100 characters)"
          error={formError.address}
          maxLength={100}
          required
        />
        <div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
