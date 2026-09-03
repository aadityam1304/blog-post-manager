import { useState } from "react";
import Button from "./Button";

export default function BlogForm({
  onAddBlog,
  editingBlog,
  onUpdateBlog,
  onCancelEdit,
}) {
  const [image, setImage] = useState(editingBlog?.image || "");
  const [title, setTitle] = useState(editingBlog?.title || "");
  const [description, setDescription] = useState(
    editingBlog?.description || "",
  );
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function isValidImageUrl(url) {
    return new Promise((resolve) => {
      const image = new Image();

      image.onload = () => resolve(true);
      image.onerror = () => resolve(false);

      image.src = url;
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      if (!image.trim()) {
        setError("Image URL is required.");
        return;
      }
      let imageUrl;

      try {
        imageUrl = new URL(image.trim());

        if (imageUrl.protocol !== "http:" && imageUrl.protocol !== "https:") {
          setError("Please enter a valid HTTP or HTTPS image URL.");
          return;
        }
      } catch {
        setError("Please enter a valid image URL.");
        return;
      }

      const imageIsValid = await isValidImageUrl(image);

      if (!imageIsValid) {
        setError(
          "We couldn't load this image. Please make sure the URL is a direct image URL.",
        );
        return;
      }

      if (!title.trim()) {
        setError("Title is required.");
        return;
      }
      if (!description.trim()) {
        setError("Description is required.");
        return;
      }
      if (editingBlog) {
        const updatedBlog = {
          id: editingBlog.id,
          image,
          title,
          description,
        };

        onUpdateBlog(updatedBlog);
      } else {
        const newBlog = {
          id: Date.now(),
          image,
          title,
          description,
        };

        onAddBlog(newBlog);
      }

      setImage("");
      setTitle("");
      setDescription("");
      setError("");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2> {editingBlog ? "Edit Blog Post" : "Create New Blog Post"}</h2>

      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => {
          setImage(e.target.value);
          setError("");
        }}
      />

      {image && <img src={image} alt="Preview" className="image-preview" />}

      <input
        type="text"
        placeholder="Blog title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setError("");
        }}
      />

      <textarea
        placeholder="Blog Description"
        value={description}
        maxLength={300}
        onChange={(e) => {
          setDescription(e.target.value);
          setError("");
        }}
      ></textarea>
      <p className="character-count">{description.length}/300 characters</p>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting
          ? "Checking..."
          : editingBlog
            ? "Save Changes"
            : "Add Post"}
      </Button>

      {error && <p className="error-message">{error}</p>}

      {editingBlog && (
        <Button type="button" onClick={onCancelEdit}>
          Cancel Edit
        </Button>
      )}
    </form>
  );
}
