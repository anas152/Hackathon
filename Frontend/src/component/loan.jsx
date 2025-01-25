import React, { useState } from "react";

const categories = [
  {
    name: "Business Startup Loans",
    maxLimit: 1000000,
    minDeposit: 100000,
  },
  {
    name: "Wedding Loans",
    maxLimit: 500000,
    minDeposit: 50000,
  },
  {
    name: "Education Loans",
    maxLimit: 1000000,
    minDeposit: 100000,
  },
];

export default function Loan() {
  const [formValues, setFormValues] = useState({
    category: "",
    loanAmount: "",
    initialDeposit: "",
    months: "",
    installment: "",
  });

  const handleCategoryChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      category: e.target.value,
    }));
  };

  const handleLoanAmountChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      loanAmount: e.target.value,
    }));
  };

  const handleInitialDepositChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      initialDeposit: e.target.value,
    }));
  };

  const handleMonthsChange = (e) => {
    const loanBalance = formValues.loanAmount - formValues.initialDeposit;
    const months = e.target.value;
    const installment = (loanBalance / months).toFixed(2);

    setFormValues((prev) => ({
      ...prev,
      months,
      installment,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { category, loanAmount, initialDeposit, months, installment } = formValues;

    const selectedCategory = categories.find((cat) => cat.name === category);
    if (!selectedCategory) {
      alert("Please select a valid category");
      return;
    }

    if (loanAmount > selectedCategory.maxLimit) {
      alert(`Loan amount exceeds the maximum limit of PKR ${selectedCategory.maxLimit}`);
      return;
    }

    if (initialDeposit < selectedCategory.minDeposit) {
      alert(`Initial deposit must be at least PKR ${selectedCategory.minDeposit}`);
      return;
    }

    if (!months || !installment) {
      alert("Please select the installment period.");
      return;
    }

    alert(
      `Loan Approved:\nCategory: ${category}\nLoan Amount: PKR ${loanAmount}\nInitial Deposit: PKR ${initialDeposit}\nMonths: ${months}\nMonthly Installment: PKR ${installment}`
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Microfinance App</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-2xl font-bold text-center mb-6">Loan Application</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="category">
              Select Loan Category:
            </label>
            <select
              id="category"
              className="w-full border-gray-300 rounded-lg p-2"
              value={formValues.category}
              onChange={handleCategoryChange}
            >
              <option value="" disabled>
                Choose a category
              </option>
              {categories.map((cat, index) => (
                <option key={index} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="loanAmount">
              Loan Amount (PKR):
            </label>
            <input
              id="loanAmount"
              type="number"
              className="w-full border-gray-300 rounded-lg p-2"
              value={formValues.loanAmount}
              onChange={handleLoanAmountChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="initialDeposit">
              Initial Deposit (PKR):
            </label>
            <input
              id="initialDeposit"
              type="number"
              className="w-full border-gray-300 rounded-lg p-2"
              value={formValues.initialDeposit}
              onChange={handleInitialDepositChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="months">
              Installment Period (Months):
            </label>
            <select
              id="months"
              className="w-full border-gray-300 rounded-lg p-2"
              value={formValues.months}
              onChange={handleMonthsChange}
            >
              <option value="" disabled>
                Choose a period
              </option>
              {[24, 36].map((monthOption, index) => (
                <option key={index} value={monthOption}>
                  {monthOption} months
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="installment">
              Monthly Installment (PKR):
            </label>
            <input
              id="installment"
              type="text"
              className="w-full border-gray-300 rounded-lg p-2 bg-gray-100"
              value={formValues.installment}
              disabled
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Submit Application
          </button>
        </form>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 Microfinance App. All rights reserved.</p>
      </footer>
    </div>
  );
}
