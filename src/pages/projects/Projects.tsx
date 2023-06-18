import data from "../../data.json";
import "./Projects.css";
import ProjectCard from "./components/ProjectCard";

function Projects() {
  return (
    <div className="list-container">
      {data.map((item) => (
        <div className="list-item">
          <ProjectCard
            image={item.imageUrl}
            summary={item.summary}
            onClickMoreInfo={() => console.log("hello")}
          ></ProjectCard>
        </div>
      ))}
    </div>
  );
}

export default Projects;
