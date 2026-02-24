import { useParams, Link } from "react-router-dom";

export default function Post() {
  const { id } = useParams();

  const posts = [
    {
      id: 1,
      title: "React Introduction",
      content: `React is a JavaScript library developed by Facebook.

It helps build fast, responsive user interfaces by using components and a Virtual DOM.

React allows developers to break large UIs into smaller reusable parts, making development efficient.`
    },
    {
      id: 2,
      title: "Understanding Components",
      content: `Components are independent building blocks in React.

Each component manages its own structure and UI using JSX.

They improve reusability, readability, and organization in React applications.`
    }
  ];

  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <h2 style={{ padding: 20, fontFamily: "Arial" }}>
        Post Not Found
      </h2>
    );
  }

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <Link
        to="/"
        style={{
          display: "inline-block",
          marginBottom: "20px",
          textDecoration: "none",
          color: "#0b5ed7",
          fontWeight: 600,
        }}
      >
        ← Back to Home
      </Link>

      <div
        style={{
          padding: "25px",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #fff8e6, #fff2cc)",
          border: "1px solid #f0d9a8",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ marginTop: 0, color: "#8a5400" }}>
          {post.title}
        </h1>

        <p
          style={{
            lineHeight: "1.7",
            whiteSpace: "pre-line",
            color: "#444",
            fontSize: "16px",
          }}
        >
          {post.content}
        </p>
      </div>
    </div>
  );
}