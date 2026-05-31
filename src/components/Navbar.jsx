import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>

      <h2 style={styles.logo}>Pavan Portfolio</h2>

      <div style={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>

    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "18px 40px",
    background: "#000",
    color: "white",
    zIndex: 1000
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold"
  },
  links: {
    display: "flex",
    gap: "20px",
    fontSize: "18px"
  }
};