import { useState } from "react";
import TaskManager from "@/components/TaskManager";

export default function TaskPage() {
  return (
    <>
      <h1 className="mb-4 text-2xl font-bold">Your Tasks</h1>
      <TaskManager />
    </>
  );
}
