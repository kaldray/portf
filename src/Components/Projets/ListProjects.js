import React, { useEffect } from "react";
import Projects from "./Projects";
import { projets } from "../../data";

const ListProjects = ({ projetRef }) => {
  return (
    <>
      {projets.map((projet) => (
        <Projects projetRef={projetRef} key={projet.id} {...projet} />
      ))}
    </>
  );
};

export default ListProjects;
