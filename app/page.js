export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <h1 style={styles.title}>
          Deploy &amp; Auto-Update Your First Website on AWS with Amplify CI/CD
        </h1>

        <p style={styles.subtitle}>
          AWS Cloud Club Sheridan College Workshop Demo by Abhijot
        </p>

        <p style={styles.text}>
          This simple Next.js website is connected to GitHub and deployed using
          AWS Amplify.
        </p>

        <p style={styles.text}>
          Any code change pushed to GitHub will automatically trigger a new
          build and deployment.
        </p>

        <div style={styles.box}>
          <p style={styles.boxTitle}>CI/CD Flow</p>
          <p style={styles.boxText}>
            Local Code → GitHub → AWS Amplify → Live Website
          </p>
        </div>
      </div>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #4b0082, #7b2cbf)",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "16px",
    maxWidth: "800px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  title: {
    fontSize: "2.2rem",
    marginBottom: "20px",
    color: "#2d1b69",
  },
  subtitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#5a189a",
  },
  text: {
    fontSize: "1rem",
    marginBottom: "14px",
    color: "#333",
    lineHeight: "1.6",
  },
  box: {
    marginTop: "25px",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "#f3e8ff",
  },
  boxTitle: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    marginBottom: "10px",
    color: "#3c096c",
  },
  boxText: {
    fontSize: "1rem",
    color: "#240046",
  },
};