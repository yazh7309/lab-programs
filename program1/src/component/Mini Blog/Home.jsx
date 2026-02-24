import { Link } from "react-router-dom";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "React Introduction",
      content:
        "React is a JavaScript library used to build fast and interactive user interfaces..."
    },
    {
      id: 2,
      title: "Understanding Components",
      content:
        "Components are the reusable building blocks of a React application..."
    }
  ];

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          marginBottom: "20px",
          textAlign: "center",
          color: "#222",
        }}
      >
        📝 Mini Blog – Home
      </h1>

      <p
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#555",
          fontSize: "15px",
        }}
      >
        Select a blog post to view the full article.
      </p>

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #e8f0ff, #f2f7ff)",
            border: "1px solid #cdd9f0",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ margin: "0 0 10px 0", color: "#1a3d7c" }}>
            {post.title}
          </h2>

          <p style={{ marginBottom: "12px", color: "#444" }}>
            {post.content.substring(0, 90)}...
          </p>

          <Link
            to={`/post/${post.id}`}
            style={{
              textDecoration: "none",
              color: "#0b5ed7",
              fontWeight: "bold",
            }}
          >
            Read Full Post →
          </Link>
        </div>
      ))}
    </div>
  );
}