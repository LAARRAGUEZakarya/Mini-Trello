import type { Task } from "../types";

import TaskItem from "./TaskItem";

interface Props {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

export default function TaskList({ tasks, toggleTask, deleteTask }: Props) {
  return (
    <ul className="list-group">
      {tasks.length === 0 && (
        <li className="list-group-item text-center text-muted">
          No tasks yet 🚀
        </li>
      )}

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}
