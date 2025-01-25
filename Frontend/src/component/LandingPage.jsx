import React, { useState } from "react";

const categories = [
  {
    name: "Business Startup Loans",
    subcategories : [
      "Buy Stall",
      "Advance Rent for Shop",
      "Shop Assets",
      "Shop Machinery",
    ],
  },
  {
    name: "Wedding Loans",
    subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
  },
  {
    name: "Education Loans",
    subcategories: ["University Fees", "Child Fees Loan"],
  },
];

export default function LandingPage() {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleInputChange = (categoryName, subcategory) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [categoryName]: subcategory,
    }));
  };

  const handleSubmit = (categoryName) => {
    const selectedSubcategory = selectedOptions[categoryName];
    if (selectedSubcategory) {
      alert(`You selected ${selectedSubcategory} under ${categoryName}`);
    } else {
      alert(`Please select a subcategory for ${categoryName}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Microfinance App</h1>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-2xl font-bold text-center mb-6">Loan Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="border rounded-lg shadow-md p-6 bg-white">
              <h3 className="text-xl font-semibold mb-4 text-center text-blue-600">{category.name}</h3>
              <div className="mb-4">
                <label htmlFor={`subcategory-${index}`} className="block text-sm font-medium text-gray-700 mb-2">
                  Select a subcategory:
                </label>
                <select
                  id={`subcategory-${index}`}
                  className="w-full border border-gray-300 rounded-lg p-2"
                  onChange={(e) => handleInputChange(category.name, e.target.value)}
                >
                  <option value="" disabled selected>
                    Choose an option
                  </option>
                  {category.subcategories.map((sub, subIndex) => (
                    <option key={subIndex} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                onClick={() => handleSubmit(category.name)}
              >
                Proceed
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; All Loans installment Should Be Pay on time Other wise we'll Go to Police</p>
      </footer>
    </div>
  );
}
