import Button from "./Button";

export default function BlogItem({ blog, onDelete }) {
  return (
    <article>
      <img className="blog-image" src={blog.image} alt={blog.title} />

      <h2>{blog.title}</h2>

      <p>{blog.title}</p>

      <Button>Edit</Button>
      <Button onClick={() => onDelete(blog.id)}>Delete</Button>
    </article>
  );
}
