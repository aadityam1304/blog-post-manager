import { useState } from "react";
import Button from "./Button";

export default function BlogForm({ onAddBlog }) {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newBlog = {
      id: Date.now(),
      image,
      title,
      description,
    };
    onAddBlog(newBlog);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Blog Post</h2>

      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <input
        type="text"
        placeholder="Blog title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Blog Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <Button type="submit">Add Post</Button>
    </form>
  );
}
