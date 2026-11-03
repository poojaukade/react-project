import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import StatePlayground from "./components/StatePlayground";
import SearchPanel from "./components/SearchPanel";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn JSX and components", completed: true },
    { id: 2, title: "Practise useState", completed: false },
    { id: 3, title: "Understand map and filter", completed: true },
    { id: 4, title: "Build a registration form", completed: false },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Add a new task
  function handleAddTask(title) {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);
  }

  // Mark task as completed or incomplete
  function handleToggleTask(taskId) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  // Delete a task
  function handleDeleteTask(taskId) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId)
    );
  }

  // Edit a task
  function handleEditTask(taskId, newTitle) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? { ...task, title: newTitle }
          : task
      )
    );
  }

  // Derived values: calculate them from tasks
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const remainingTasks = totalTasks - completedTasks;

  // Search filtering
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Header />

      <main className="container">

        <StatePlayground
          darkMode={darkMode}
          onToggleTheme={() => setDarkMode((previous) => !previous)}
        />

        <section className="dashboard">
          <h2>My Task Manager</h2>
          <p className="section-description">
            Organise your work and track your progress.
          </p>

          <div className="stats">
            <div className="stat-card">
              <span>Total Tasks</span>
              <h3>{totalTasks}</h3>
            </div>

            <div className="stat-card">
              <span>Completed</span>
              <h3>{completedTasks}</h3>
            </div>

            <div className="stat-card">
              <span>Remaining</span>
              <h3>{remainingTasks}</h3>
            </div>
          </div>

          <TaskForm onAdd={handleAddTask} />

          <SearchPanel
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <TaskList
            tasks={filteredTasks}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
          />

          <Footer
            totalTasks={totalTasks}
            remainingTasks={remainingTasks}
          />
        </section>

        <RegistrationForm />

      </main>
    </div>
  );
}

export default App;