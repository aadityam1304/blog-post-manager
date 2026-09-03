import BlogItem from "./BlogItem";

export default function BlogList({ blogs, onDelete, onEdit }) {
  return (
    <div>
      <h2 className="blog-list-heading">Blog Post</h2>

      {blogs.length === 0 ? (
        <p className="empty-message">No Blog posts yet.</p>
      ) : (
        <div className="blog-list">
          {blogs.map((blog) => (
            <BlogItem
              key={blog.id}
              blog={blog}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      )}
    </div>
  );
}
