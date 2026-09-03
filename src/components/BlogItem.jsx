import Button from "./Button";

export default function BlogItem({ blog }) {
  return (
    <article>
      <img className="blog-image" src={blog.image} alt={blog.title} />

      <h2>{blog.title}</h2>

      <p>{blog.title}</p>

      <Button>Edit</Button>
      <Button>Delete</Button>
    </article>
  );
}
