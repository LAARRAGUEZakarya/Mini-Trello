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
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task..."
      />
      <button>Add</button>
    </form>
  );
}
