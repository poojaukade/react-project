function SearchPanel({ searchTerm, onSearchChange }) {
  return (
    <div className="search-panel">
      <input
        type="search"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search your tasks..."
      />
    </div>
  );
}

export default SearchPanel;