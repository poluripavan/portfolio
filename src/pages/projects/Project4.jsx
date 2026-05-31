import { Link } from "react-router-dom";
import irsensor from "../../assets/irsensor.jpg";

export default function Project4() {
  return (
    <section className="section">

      <h2 className="heading">IR Human Detection System</h2>

      <div className="card" style={{ maxWidth: "800px" }}>

        <p className="text">
          Built an IR sensor-based human detection system for automation applications.
        </p>

        <p className="text">
          Focused on real-time detection logic and embedded system integration.
        </p>

        <p style={{ color: "#00ffd5" }}>
          Tech: IR Sensor, EasyEDA, Embedded Systems
        </p>

        <img
          src={irsensor}
          alt="IR Sensor Project"
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