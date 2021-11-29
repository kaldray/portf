import Projects from "./Projects";

const ListProjects = (props) => {
  const projet = [
    {
      id: 1,
      title: "Deez'web",
      date: "mars 2021",
      languages: "Html, Css, Java script",
      infos: "Site qui permet d'enregistrer des sons depuis l'api de deezer.",
      img: "/img/deezweb.jpg",
      link: "./projets/deezer/login.html",
      color: { color: "" },
    },
    {
      id: 2,
      title: "React Calculatrice",
      date: "mai 2021",
      languages: "React, Css",
      infos: "Calculatrice réalisé avec la biblihothèque react.",
      img: "img/calculette.png",
      link: "./projets/calculatrice/index.html",
      color: { color: "" },
    },
    {
      id: 3,
      title: "Projet Final",
      date: "avril 2021",
      languages: "HTML, SCSS, JavaSript",
      infos: "Projet final de mon école ! ",
      img: "img/hatik.png",
      link: "./projets/hatik/index.html",
      color: { color: "white" },
    },
    {
      id: 4,
      title: "Pokédex en ligne",
      date: "novembre 2021",
      languages: "React , Firebase , StyledComponent",
      infos: "Permets de voir tous les pokémons ainsi que leurs infos.",
      img: "img/pokedex.png",
      link: "./projets/pokedex/index.html",
      color: { color: "black" },
    },
  ];

  return (
    <>
      {projet.map((projet) => (
        <Projects key={projet.id} {...projet} />
      ))}
    </>
  );
};

export default ListProjects;
