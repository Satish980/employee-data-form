# Employee Form Assignment


This assignment includes an employee form with validation. Users can fill out the form, and appropriate alerts are displayed based on validation rules.

---

## Technologies Used
- **React**: For building the UI components.
- **JavaScript**: Core logic for the application.
- **CSS**: Styling for the form and components.
- **Vite**: For fast bundling and development.

---

## Features
1. **Reusable FormField Component**: 
   - A generic component that renders different input types dynamically.
   - Handles labels, placeholders, required indicators, and error messages.
   
2. **Validation Rules**: 
   - **Mandatory Fields**: Displays an alert if required fields are missing.
   - **Phone Number Validation**: Ensures the phone number has exactly 10 digits.
   - **Email Validation**: Checks for a valid email format.
   - **Date of Birth**: Ensures the date is not in the future.
   - **Address Field**: Limits input to 100 characters.

---

## How to Run the Project

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Steps to Run

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Satish980/employee-data-form.git
   cd employee-data-form
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the Application**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   This will start the development server. Check the port where server is running and open in the browser.

---
