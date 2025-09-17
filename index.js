export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f9fafb",
      padding: "24px"
    }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "16px" }}>
        Welcome to Skill Market Hub
      </h1>
      <p style={{ fontSize: "1.125rem", color: "#374151", maxWidth: "600px", textAlign: "center", marginBottom: "24px" }}>
        Skill Market Hub is a platform designed to connect learners and experts
        in various fields, fostering collaboration, mentorship, and growth.
        We are seeking sponsorships and partnerships to bring this vision to life.
      </p>

      <a
        href="mailto:lynderangwenyi@example.com"
        style={{
          padding: "12px 24px",
          backgroundColor: "#2563eb",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
        }}
      >
        Sponsor Us
      </a>
    </main>
  );
}