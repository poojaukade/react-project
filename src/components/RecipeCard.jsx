function RecipeCard({ recipe }) {
  return (
    <article className="recipe-card">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />

      <div className="recipe-card-content">
        <h3>{recipe.strMeal}</h3>

        <p>{recipe.strCategory}</p>

        <p>{recipe.strArea} Cuisine</p>

        <button type="button">
          View Details
        </button>
      </div>
    </article>
  );
}

export default RecipeCard;