import { Link } from "react-router-dom";
import streetlight from "../../assets/streetlight.jpg";
export default function Project1() {
  return (
    <section className="section">
        <img
  src={streetlight}
  alt="Street Light Project"
  style={{ width: "100%", borderRadius: "10px" }}
/>

      <h2 className="heading">Automatic Street Light System</h2>

      <div className="card" style={{ maxWidth: "800px" }}>

        <p className="text">
          Designed an energy-efficient automatic street lighting system using LDR sensor-based automation.
          The system automatically turns ON/OFF based on ambient light conditions.
        </p>

        <p className="text">
          Built using circuit simulation and implemented on breadboard hardware for real-world validation.
        </p>

        <p style={{ color: "#00ffd5", marginTop: "10px" }}>
          Tech: LTspice, Circuit Design, Breadboard
        </p>

        

      </div>

      <Link
        to="/projects"
        style={{
          marginTop: "20px",
          display: "inline-block",
          color: "#00ffd5",
          textDecoration: "none",
          fontSize: "18px"
        }}
      >
        ← Back to Projects
      </Link>

    </section>
  );
}