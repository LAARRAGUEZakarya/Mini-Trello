import { useState } from "react";

interface TaskFormProps {
  addTask: (title: string) => void;
}

export default function TaskForm({ addTask }: TaskFormProps) {
  const [title, setTitle] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={submit} className="d-flex mb-3">
      <input
        className="form-control me-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
      />
      <button className="btn btn-primary">Add</button>
    </form>
  );
}
