import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const list = projects.map((listProject) => (
    <ProjectItem
      key={listProject.key}
      name={listProject.name}
      about={listProject.about}
      technologies={listProject.technologies}
    />
  ));
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {list}
      </div>
    </div>
  );
}

export default ProjectList;
