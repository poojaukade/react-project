import { useState } from "react";

function StatePlayground({ darkMode, onToggleTheme }) {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(true);

  const [items, setItems] = useState([
    { id: 1, name: "React" },
    { id: 2, name: "JavaScript" },
  ]);

  const [newItem, setNewItem] = useState("");

  // Add item using spread
  function handleAddItem() {
    const trimmedItem = newItem.trim();

    if (!trimmedItem) return;

    const item = {
      id: Date.now(),
      name: trimmedItem,
    };

    setItems((previousItems) => [...previousItems, item]);
    setNewItem("");
  }

  // Delete item using filter
  function handleDeleteItem(itemId) {
    setItems((previousItems) =>
      previousItems.filter((item) => item.id !== itemId)
    );
  }

  // Edit item using map and object spread
  function handleEditItem(itemId) {
    const newName = window.prompt("Enter updated item name:");

    if (newName === null || !newName.trim()) return;

    setItems((previousItems) =>
      previousItems.map((item) =>
        item.id === itemId
          ? { ...item, name: newName.trim() }
          : item
      )
    );
  }

  return (
    <section className="playground">
      <div className="section-heading">
        <div>
          <h2>State Playground</h2>
          <p className="section-description">
            Practise React state with interactive examples.
          </p>
        </div>
      </div>

      <div className="playground-grid">

        {/* Counter */}
        <div className="play-card">
          <h3>Counter</h3>

          <div className="counter-value">{count}</div>

          <div className="button-group">
            <button
              type="button"
              onClick={() => setCount((prev) => (prev  == 0 ? 0 : prev - 1))}
            >
              −
            </button>

            <button
              type="button"
              onClick={() => setCount((prev) => prev + 1)}
            >
              +
            </button>

            <button
              type="button"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          </div>
        </div>

        {/* Show / Hide */}
        <div className="play-card">
          <h3>Show / Hide</h3>

          <button
            type="button"
            onClick={() => setShowMessage((prev) => !prev)}
          >
            {showMessage ? "Hide Message" : "Show Message"}
          </button>

          {showMessage && (
            <p className="success-message">
              React state controls this message!
            </p>
          )}
        </div>

        {/* Theme */}
        <div className="play-card">
          <h3>Theme Switch</h3>

          <p>{darkMode ? "Dark Mode" : "Light Mode"}</p>

          <button type="button" onClick={onToggleTheme}>
            Switch Theme
          </button>
        </div>

        {/* Array state */}
        <div className="play-card array-card">
          <h3>Array State Practice</h3>

          <div className="array-input">
            <input
              value={newItem}
              onChange={(event) => setNewItem(event.target.value)}
              placeholder="Enter an item"
            />

            <button type="button" onClick={handleAddItem}>
              Add
            </button>
          </div>

          {items.map((item) => (
            <div className="array-item" key={item.id}>
              <span>{item.name}</span>

              <div className="button-group">
                <button
                  type="button"
                  onClick={() => handleEditItem(item.id)}
                >
                  Edit
                </button>

                <button
                  type="button"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default StatePlayground;