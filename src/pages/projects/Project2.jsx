import { Link } from "react-router-dom";
import maze from "../../assets/maze.jpg";

export default function Project2() {
  return (
    <section className="section">

      <h2 className="heading">Maze Pathfinding System</h2>

      <div className="card" style={{ maxWidth: "800px" }}>

        <p className="text">
          Implemented BFS and DLS algorithms in Python for maze solving and path optimization.
        </p>

        <p className="text">
          Compared shortest path (BFS) and depth-limited search techniques for efficiency analysis.
        </p>

        <p style={{ color: "#00ffd5" }}>
          Tech: Python, BFS, DLS
        </p>

        <img
          src={maze}
          alt="Maze Project"
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