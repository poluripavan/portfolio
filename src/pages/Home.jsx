import profile from "../assets/profile.jpg";

export default function Home() {
  return (
    <section id="home" className="section">

      <img src={profile} className="profile-img" alt="profile" />

      <h1 className="title">Pavan Kalyan Poluri</h1>

      <p className="subtitle">
        Electronics & Communication Engineering Student | Embedded Systems | Automation Engineer
      </p>

      <p className="text">
        I am an Electronics and Communication Engineering student with strong interest in embedded systems,
        VLSI fundamentals, circuit design, and hardware-software integration. I focus on building practical
        engineering solutions that connect theory with real-world applications.
      </p>

      <p className="text">
        My work involves designing circuits, working with sensors, and implementing logic using C and Python.
        I enjoy problem-solving through both hardware prototyping and algorithmic thinking.
      </p>

    </section>
  );
}