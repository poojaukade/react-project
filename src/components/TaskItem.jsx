function TaskItem({ task, onToggle, onDelete, onEdit }) {
  function handleEdit() {
    const newTitle = window.prompt(
      "Edit your task:",
      task.title
    );

    if (newTitle === null) return;

    const trimmedTitle = newTitle.trim();

    if (!trimmedTitle) return;

    onEdit(task.id, trimmedTitle);
  }

  return (
    <div className="task-item">
      <label className="task-label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />

        <span className={task.completed ? "completed" : ""}>
          {task.title}
        </span>
      </label>

      <div className="task-actions">
        <button
          type="button"
          className="edit-button"
          onClick={handleEdit}
        >
          Edit
        </button>

        <button
          type="button"
          className="delete-button"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;