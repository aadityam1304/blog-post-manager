import { useState } from "react";
import "./App.css";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";

export default function App() {
  const [blogs, setBlogs] = useState([]);
  const [editingBlogId, setEditingBlogId] = useState(null);

  function addBlogs(blog) {
    setBlogs([...blogs, blog]);
  }

  function deleteBlog(id) {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  }

  function updateBlog(updatedBlog) {
    setBlogs(
      blogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog)),
    );
    setEditingBlogId(null);
  }

  function editBlog(id) {
    setEditingBlogId(id);
  }

  function cancelEdit() {
    setEditingBlogId(null);
  }

  const editingBlog = blogs.find((blog) => blog.id === editingBlogId);

  return (
    <div>
      <h1>Blog Post Manager</h1>
      <p>
        Total Posts: <strong> {blogs.length}</strong>
      </p>

      <BlogForm
        key={editingBlogId}
        onAddBlog={addBlogs}
        onUpdateBlog={updateBlog}
        editingBlog={editingBlog}
        onCancelEdit={cancelEdit}
      />
      <BlogList blogs={blogs} onDelete={deleteBlog} onEdit={editBlog} />
    </div>
  );
}
