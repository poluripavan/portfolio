import { Link } from "react-router-dom";
import grocery from "../../assets/grocery.jpg";

export default function Project3() {
  return (
    <section className="section">

      <h2 className="heading">Grocery Billing System</h2>

      <div className="card" style={{ maxWidth: "800px" }}>

        <p className="text">
          Developed a Python-based billing system for managing grocery items and generating bills.
        </p>

        <p className="text">
          Implemented item selection, price calculation, and bill generation logic.
        </p>

        <p style={{ color: "#00ffd5" }}>
          Tech: Python, VS Code
        </p>

        <img
          src={grocery}
          alt="Grocery Project"
          style={{
            width: "100%",
            marginTop: "15px",
            borderRadius: "10px"
          }}
        />

      </div>

      <Link to="/projects" style={{ color: "#00ffd5" }}>
        ← Back to Projects
      </Link>

    </section>
  );
}