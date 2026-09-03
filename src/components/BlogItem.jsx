import Button from "./Button";

export default function BlogItem({ blog, onDelete, onEdit }) {
  return (
    <article className="blog-card">
      <img
        className="blog-image"
        src={blog.image}
        alt={`Cover image for ${blog.title}`}
      />

      <h2>{blog.title}</h2>

      <p>{blog.description}</p>

      <Button className="edit-button" onClick={() => onEdit(blog.id)}>
        Edit
      </Button>

      <Button
        className="delete-button"
        onClick={() => {
          const confirmed = window.confirm(
            "Are you sure you want to delete this blog post?",
          );

          if (confirmed) {
            onDelete(blog.id);
          }
        }}
      >
        Delete
      </Button>
    </article>
  );
}
