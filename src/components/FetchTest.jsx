import useFetch from "../hooks/useFetch";

function FetchTest() {
  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
  );

  if (loading) {
    return <p>Loading recipes...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Recipes</h2>

      {data?.meals?.map((meal) => (
        <p key={meal.idMeal}>{meal.strMeal}</p>
      ))}
    </div>
  );
}

export default FetchTest;