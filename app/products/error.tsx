"use client" // Error boundaries must be Client Components

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f8f9fa",
        textAlign: "center",
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
      }}
    >
      <div
        style={{
          padding: "20px",
          border: "2px solid #ff6b6b",
          borderRadius: "10px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ color: "#ff6b6b", fontSize: "24px" }}>Oops! Something went wrong 😿</h2>
        <p style={{ color: "#6c757d", marginBottom: "20px" }}>
          Don&apos;t worry, we&apos;re on it! You can try again below.
        </p>
        <button
          onClick={() => reset()}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            color: "#fff",
            backgroundColor: "#ff6b6b",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = "#ff4c4c")}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = "#ff6b6b")}
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
