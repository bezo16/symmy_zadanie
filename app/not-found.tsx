import Link from "next/link"

const NotFound = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column",
      textAlign: "center",
    }}
    >
      <h1 style={{ fontSize: "4rem", color: "#ff6b6b" }}>404</h1>
      <p style={{ fontSize: "1.5rem", color: "#555" }}>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/products">
        Go back to Products
      </Link>
    </div>
  )
}

export default NotFound
