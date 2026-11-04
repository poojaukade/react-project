import { useState } from "react";
import RecipeSearch from "./RecipeSearch";
import RecipeList from "./RecipeList";
import useFetch from "../hooks/useFetch";
import "./RecipeApp.css";

function RecipeApp() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(value) {
    setSearchTerm(value);
  }

  const url = searchTerm
    ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchTerm)}`
    : "";

  const { data, loading, error } = useFetch(url);

  return (
    <section className="recipe-app">
      <h2>Recipe Finder</h2>

      <RecipeSearch onSearch={handleSearch} />

      {loading && (
        <p className="recipe-message recipe-loading">
          Loading recipes...
        </p>
      )}

      {error && (
        <p className="recipe-message recipe-error">
          Error: {error}
        </p>
      )}

      {data?.meals && (
        <RecipeList recipes={data.meals} />
      )}

      {data && data.meals === null && (
        <p className="recipe-message recipe-empty">
          No recipes found. Try another search.
        </p>
      )}
    </section>
  );
}

export default RecipeApp;