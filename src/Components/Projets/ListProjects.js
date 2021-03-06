import React from "react";
import Projects from "./Projects";

const ListProjects = () => {
  const projets = [
    // {
    //   id: 1,
    //   title: "Deez'web",
    //   date: "mars 2021",
    //   languages: "Html, Css, Java script",
    //   infos: "Site qui permet d'enregistrer des sons depuis l'api de deezer.",
    //   img: "/img/deezweb.jpg",
    //   link: "./projets/deezer/login.html",
    //   color: { color: "" },
    // },
    {
      id: 2,
      title: "Calculatrice",
      date: "mai 2021",
      languages: "React Css",
      infos: "Calculatrice réalisé avec la librairie react.",
      img: "img/calculette.png",
      link: "./projets/calculatrice/index.html",
    },
    {
      id: 3,
      title: "Projet Hatik",
      date: "avril 2021",
      languages: "HTML SCSS JavaSript",
      infos: "Site vitrine évenementiel pour la sortie d'un album ! ",
      img: "img/hatik.png",
      link: "./projets/hatik/index.html",
    },
    {
      id: 4,
      title: "Pokédex en ligne",
      date: "novembre 2021",
      languages: "React Firebase StyledComponent",
      infos: "Pokédex en ligne avec tous les pokémons par régions.",
      img: "img/pokedex.png",
      link: "./projets/pokedex/index.html",
    },
    {
      id: 5,
      title: "Clavier virtuel",
      date: "janvier 2022",
      languages: "HTML CSS Java Script",
      infos: "Clavier virtuel",
      img: "img/claviervirtuel.png",
      link: "./projets/claviervirtuel/index.html",
    },
    {
      id: 6,
      title: "Deezer",
      date: "mars 2022",
      languages: "React Bootstrap",
      infos: "Recherche de son avec l'api de deezer",
      img: "img/deezer.png",
      link: "./projets/deezereact/index.html",
    },
  ];

  return (
    <>
      {projets.map((projet) => (
        <Projects key={projet.id} {...projet} />
      ))}
    </>
  );
};

export default ListProjects;
