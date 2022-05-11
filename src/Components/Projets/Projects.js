import React from "react";

const Projects = ({ img, link, title, languages, infos, date }) => {
  const goTolinkProjetcs = () => {
    window.location.href = `${link}`;
  };

  return (
    <>
      <article className="container">
        <img
          className="img-container"
          src={img}
          alt="La page d'acuueil du projet"
        />
        <div className="project-description">
          <div className="base">
            <h1 className="title">{title}</h1>
            <p className="languages">{languages}</p>
          </div>
          <div className="infos">
            <p>{infos}</p>
            <span className="date">Réalisé en {date}</span>
          </div>
        </div>
        <button onClick={goTolinkProjetcs}>Allez vers le projet</button>
      </article>
    </>
  );
};

export default Projects;
