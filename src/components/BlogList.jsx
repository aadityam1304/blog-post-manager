import BlogItem from "./BlogItem";

export default function BlogList({ blogs }) {
  return (
    <div>
      <h2>Blog Post</h2>

      {blogs.length === 0 ? (
        <p>No Blog posts yet.</p>
      ) : (
        blogs.map((blog) => <BlogItem key={blog.id} blog={blog} />)
      )}
    </div>
  );
}
