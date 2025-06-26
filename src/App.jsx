import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import TaskPage from "@/pages/TaskPage";
import PostsPage from "@/pages/PostsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tasks" element={<TaskPage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="*" element={<p>404 • Not found</p>} />
      </Route>
    </Routes>
  );
}
