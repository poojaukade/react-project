import useLocalStorage from "../hooks/useLocalStorage";

function StorageTest() {
  const [favorites, setFavorites] = useLocalStorage(
    "testFavorites",
    []
  );

  function addFavorite() {
    setFavorites((previous) => [
      ...previous,
      "Chicken Handi",
    ]);
  }

  return (
    <div>
      <h2>Local Storage Test</h2>

      <button onClick={addFavorite}>
        Add Favorite
      </button>

      {favorites.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default StorageTest;