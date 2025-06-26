import { useEffect, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import Button from "./Button";
import Card from "./Card";
import { X, Check } from "lucide-react";

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");
  const [text, setText] = useState("");

  const filtered = tasks.filter((t) =>
    filter === "active" ? !t.completed : filter === "completed" ? t.completed : true
  );

  function addTask(e) {
    e.preventDefault();
    if (!text.trim()) return;
    setTasks([{ id: Date.now(), text, completed: false }, ...tasks]);
    setText("");
  }

  function toggle(id) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  }

  function remove(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  return (
    <Card>
      {/* Add */}
      <form onSubmit={addTask} className="mb-4 flex gap-2">
        <input
          className="flex-1 rounded-md border p-2 dark:bg-gray-800 dark:border-gray-700"
          placeholder="Add new task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit">Add</Button>
      </form>

      {/* Filters */}
      <div className="mb-4 flex gap-2">
        {["all", "active", "completed"].map((f) => (
          <Button
            key={f}
            variant={filter === f ? "primary" : "secondary"}
            onClick={() => setFilter(f)}
          >
            {f[0].toUpperCase() + f.slice(1)}
          </Button>
        ))}
      </div>

      {/* List */}
      <ul className="space-y-2">
        {filtered.map((t) => (
          <li
            key={t.id}
            className="flex items-center justify-between rounded-md bg-white p-2 shadow dark:bg-gray-800"
          >
            <span className={t.completed ? "line-through text-gray-500" : ""}>{t.text}</span>
            <div className="flex items-center gap-2">
              <Button variant="secondary" onClick={() => toggle(t.id)}>
                <Check size={16} />
              </Button>
              <Button variant="danger" onClick={() => remove(t.id)}>
                <X size={16} />
              </Button>
            </div>
          </li>
        ))}
        {!filtered.length && <p className="text-center text-gray-500">No tasks.</p>}
      </ul>
    </Card>
  );
}
