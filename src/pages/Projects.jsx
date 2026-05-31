import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section id="projects" className="section">

      <h2 className="heading">Projects</h2>

      <div className="grid">

        <Link to="/project1" className="card">Automatic Street Light System</Link>

        <Link to="/project2" className="card">Maze Pathfinding (BFS & DLS)</Link>

        <Link to="/project3" className="card">Grocery Billing System</Link>

        <Link to="/project4" className="card">IR Human Detection System</Link>

      </div>

    </section>
  );
}