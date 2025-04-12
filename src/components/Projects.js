import React from "react";

export default function Projects() {
  const projects = ["Weather App", "To-Do List", "Portfolio Site"];
  
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </section>
  );
}
