import { useRef, useState } from "react";
import usePosts from "@/hooks/usePosts";
import Button from "@/components/Button";
import Card from "@/components/Card";

export default function PostsPage() {
  const [search, setSearch] = useState("");
  const { posts, loading, error, next } = usePosts(search);

  return (
    <>
      <h1 className="mb-4 text-2xl font-bold">JSONPlaceholder Posts</h1>

      {/* Search */}
      <input
        className="mb-4 w-full rounded-md border p-2 dark:bg-gray-800 dark:border-gray-700"
        placeholder="Search posts…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* States */}
      {loading && <p>Loading…</p>}
      {error && <p className="text-red-600">{error}</p>}

      {/* Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((p) => (
          <Card key={p.id} title={p.title}>
            <p>{p.body}</p>
          </Card>
        ))}
      </div>

      {!loading && (
        <div className="mt-6 text-center">
          <Button onClick={next} variant="secondary">
            Load more
          </Button>
        </div>
      )}
    </>
  );
}
