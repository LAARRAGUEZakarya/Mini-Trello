import type { Task } from "../types";

interface Props {
  task: Task;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

export default function TaskItem({ task, toggleTask, deleteTask }: Props) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        className={`pointer ${
          task.done ? "text-decoration-line-through text-muted" : ""
        }`}
        onClick={() => toggleTask(task.id)}
      >
        {task.title}
      </span>

      <button
        className="btn btn-sm btn-outline-danger"
        onClick={() => deleteTask(task.id)}
      >
        ✕
      </button>
    </li>
  );
}
