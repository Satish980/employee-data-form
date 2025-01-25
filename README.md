# Employee Form Documentation

## Overview
A React-based application that includes an employee form with validation. Users can fill out the form, and appropriate alerts are displayed based on validation rules.

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
   git clone <repository-url>
   cd project-directory
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
   This will start the development server. Open your browser and navigate to `http://localhost:3000`.

4. **Build for Production**
   ```bash
   npm run build
   # or
   yarn build
   ```
   The production-ready files will be generated in the `dist` folder.

---