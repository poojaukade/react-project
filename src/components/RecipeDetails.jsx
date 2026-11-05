import useFetch from "../hooks/useFetch";

function RecipeDetails({ recipeId, onClose }) {

  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`;

  const { data, loading, error } = useFetch(url);
  console.log("meals+++++",data?.meals);

  const recipe = data?.meals?.[0];

  if (loading) {
    return <p>Loading recipe details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!recipe) {
    return <p>Recipe details not found.</p>;
  }

  const ingredients = Array.from({ length: 20 }, (_, index) => {
    const number = index + 1;

    return {
      name: recipe[`strIngredient${number}`],
      measure: recipe[`strMeasure${number}`],
    };
  }).filter((item) => item.name?.trim());

  return (
    <div className="recipe-details">

      <button type="button" className="back-button" onClick={onClose}>
        Back to Recipes
      </button>

      <h2>{recipe.strMeal}</h2>

      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />

      <p>
        <strong>Category:</strong> {recipe.strCategory}
      </p>

      <p>
        <strong>Cuisine:</strong> {recipe.strArea}
      </p>

      <h3>Ingredients</h3>

      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>
            {item.measure} {item.name}
          </li>
        ))}
      </ul>

      <h3>Cooking Instructions</h3>

      <p className="recipe-instructions">{recipe.strInstructions}</p>

    </div>
  );
}

export default RecipeDetails;