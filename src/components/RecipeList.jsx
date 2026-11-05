import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, onViewDetails }) {
  return (
    <div className="recipe-results">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}

export default RecipeList;