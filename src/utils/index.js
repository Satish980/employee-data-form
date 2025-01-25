const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^\d{10}$/,
};

const validateData = (employeeData) => {
  const errorObject = {};

  if (!employeeData.firstName) {
    errorObject.firstName = "First Name is required.";
  }

  if (!employeeData.lastName) {
    errorObject.lastName = "Last Name is required.";
  }

  if (!employeeData.dateOfBirth) {
    errorObject.dateOfBirth = "Date of Birth is required.";
  }

  // Phone number validation
  if (!employeeData.phoneNumber) {
    errorObject.phoneNumber = "Phone Number is required.";
  } else if (!REGEX.PHONE.test(employeeData.phoneNumber)) {
    errorObject.phoneNumber = "Phone Number must be exactly 10 digits.";
  }

  // Email validation
  if (!employeeData.email) {
    errorObject.email = "Email is required.";
  } else if (!REGEX.EMAIL.test(employeeData.email)) {
    errorObject.email = "Invalid email format.";
  }

  if (!employeeData.address) {
    errorObject.address = "Address is required.";
  }

  return errorObject;
};

const MAX_DATE = new Date().toISOString().split("T")[0];

export { validateData, MAX_DATE };
