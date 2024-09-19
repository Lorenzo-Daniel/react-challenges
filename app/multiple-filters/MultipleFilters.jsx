"use client";

import React, { useState } from "react";
import { items as defaultItems } from "./data/items";
import "./css/multiple-filters.css";

export default function MultipleFilters() {
  const [categories, setCategories] = useState([
    { category: "Bags", isSelected: false },
    { category: "Watches", isSelected: false },
    { category: "Sports", isSelected: false },
    { category: "Sunglasses", isSelected: false },
  ]);

  const handleFilter = (category) => {
    const updatedCategories = categories.map((el) =>
      el.category === category ? { ...el, isSelected: !el.isSelected } : el
    );
    setCategories(updatedCategories);
  };

  const filteredItems = defaultItems.filter((item) => {
    const selectedCategories = categories.filter(
      (category) => category.isSelected
    );
    if (selectedCategories.length === 0) {
      return true;
    }
    return selectedCategories.some(
      (category) => category.category === item.category
    );
  });

  return (
    <div className="flex flex-col border p-2 h-[300px] rounded">
      <div className="buttons-container">
        {categories.map((el, idx) => (
          <button
            className={`button ${el.isSelected ? "active" : ""}`}
            key={`filters-${idx}`}
            onClick={() => handleFilter(el.category)}
          >
            {el.category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 mt-5 ">
        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} className="item">
            <p>{item.name}</p>
            <p className="category">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
