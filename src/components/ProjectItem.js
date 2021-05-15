import React from "react";

function ProjectItem({ name, about, technologies }) {
  const list = technologies.map((techList) => (
   <span key={techList}>{techList}</span>
  ));

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {list}
      </div>
    </div>
  );
}

export default ProjectItem;
