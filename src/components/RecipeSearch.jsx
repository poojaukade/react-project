import { useState } from "react";

function RecipeSearch({ onSearch , initialValue }) {
  const [inputValue, setInputValue] = useState(initialValue);

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
      return;
    }

    onSearch(trimmedValue);
  }

 return (
  <form className="recipe-search-form" onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Search recipes..."
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
    />

    <button type="submit">Search</button>
  </form>
);
}

export default RecipeSearch;