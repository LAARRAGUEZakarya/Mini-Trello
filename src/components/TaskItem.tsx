import type { Task } from "../types";


interface Props {
  task: Task;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

export default function TaskItem({ task, toggleTask, deleteTask }: Props) {
  return (
    <li className={task.done ? "done" : ""}>
      <span onClick={() => toggleTask(task.id)}>
        {task.title}
      </span>
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </li>
  );
}
