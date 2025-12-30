import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import type { Task } from "./types";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | "done" | "pending">("all");

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string) => {
    setTasks([...tasks, { id: Date.now(), title, done: false }]);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) =>
    filter === "all" ? true : filter === "done" ? t.done : !t.done
  );

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="text-center mb-4">✅ Task Manager</h3>

              <TaskForm addTask={addTask} />

              <div className="btn-group w-100 mb-3">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => setFilter("all")}
                >
                  All
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => setFilter("done")}
                >
                  Done
                </button>
                <button
                  className="btn btn-outline-warning"
                  onClick={() => setFilter("pending")}
                >
                  Pending
                </button>
              </div>

              <TaskList
                tasks={filteredTasks}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
