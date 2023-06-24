import data from "../../data.json";
import "./Projects.css";
import ProjectCard from "./components/ProjectCard";

function Projects() {
  return (
    <div className="list-container">
      {data.map((item: Project, index) => (
        <div className="list-item">
          <ProjectCard
            image={item.imageUrl}
            summary={item.summary}
            index={index}
          ></ProjectCard>
        </div>
      ))}
    </div>
  );
}

export default Projects;
