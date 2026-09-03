import { useState } from "react";
import "./App.css";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";

export default function App() {
  const [blogs, setBlogs] = useState([]);

  function addBlogs(blog) {
    setBlogs([...blogs, blog]);
  }
  return (
    <div>
      <h1>Blog Post Manager</h1>
      <p>Total Posts: {blogs.length}</p>

      <BlogForm onAddBlog={addBlogs} />
      <BlogList blogs={blogs} />
    </div>
  );
}
