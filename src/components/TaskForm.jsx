import { useState } from "react";

function TaskForm({ onAdd }) {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTask = task.trim();

    if (!trimmedTask) {
      setError("Please enter a task.");
      return;
    }

    if (trimmedTask.length < 3) {
      setError("Task must contain at least 3 characters.");
      return;
    }

    onAdd(trimmedTask);

    setTask("");
    setError("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="task-input-wrapper">
        <input
          type="text"
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
            setError("");
          }}
          placeholder="Enter a new task..."
        />

        <button type="submit" className="primary-button">
          + Add Task
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default TaskForm;