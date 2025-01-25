import React, { useState } from "react";

export default function UserInfo() {
  const [formValues, setFormValues] = useState({
    name: "",
    cnic: "",
    contactNumber: "",
    houseAddress: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    nameError: "",
    cnicError: "",
    contactNumberError: "",
    addressError: "",
  });

  const handleChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {
      nameError: "",
      cnicError: "",
      contactNumberError: "",
      addressError: "",
    };

    // Name validation
    if (!formValues.name) {
      errors.nameError = "Name is required.";
    }

    // CNIC validation
    const cnicPattern = /^[0-9]{13}$/;
    if (!formValues.cnic || !cnicPattern.test(formValues.cnic)) {
      errors.cnicError = "Please enter a valid 13-digit CNIC number.";
    }

    // Contact Number validation
    const contactPattern = /^[0-9]{11}$/;
    if (!formValues.contactNumber || !contactPattern.test(formValues.contactNumber)) {
      errors.contactNumberError = "Please enter a valid 11-digit contact number.";
    }

    // Address validation
    if (!formValues.houseAddress) {
      errors.addressError = "Address is required.";
    }

    if (Object.values(errors).every((error) => !error)) {
      // Submit the form (e.g., save data to MongoDB)
      alert("Form submitted successfully!");
      // Here, you can integrate the MongoDB saving functionality.
    }

    setErrorMessages(errors);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-center mb-6">User Information Form</h1>

      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
            />
            {errorMessages.nameError && (
              <p className="text-red-500 text-sm mt-1">{errorMessages.nameError}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="cnic" className="block text-sm font-medium text-gray-700">
              CNIC Number
            </label>
            <input
              type="text"
              id="cnic"
              name="cnic"
              value={formValues.cnic}
              onChange={handleChange}
              placeholder="Enter your CNIC number"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
            />
            {errorMessages.cnicError && (
              <p className="text-red-500 text-sm mt-1">{errorMessages.cnicError}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={formValues.contactNumber}
              onChange={handleChange}
              placeholder="Enter your contact number"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
            />
            {errorMessages.contactNumberError && (
              <p className="text-red-500 text-sm mt-1">{errorMessages.contactNumberError}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="houseAddress" className="block text-sm font-medium text-gray-700">
              House Address
            </label>
            <textarea
              id="houseAddress"
              name="houseAddress"
              value={formValues.houseAddress}
              onChange={handleChange}
              placeholder="Enter your house address"
              rows="4"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
            />
            {errorMessages.addressError && (
              <p className="text-red-500 text-sm mt-1">{errorMessages.addressError}</p>
            )}
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
