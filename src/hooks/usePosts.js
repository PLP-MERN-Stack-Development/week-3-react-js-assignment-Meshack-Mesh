// hooks/usePosts.js
import { useEffect, useRef, useState } from "react";

export default function usePosts(query = "") {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const perPage = 10;

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${perPage}&_page=${page}`)
      .then((r) => r.json())
      .then((d) => setPosts((prev) => (page === 1 ? d : [...prev, ...d])))
      .catch(() => setError("Failed to load posts"))
      .finally(() => setLoading(false));
  }, [page]);

  const filtered = posts.filter((p) => p.title.includes(query) || p.body.includes(query));

  return { posts: filtered, loading, error, next: () => setPage((p) => p + 1) };
}
