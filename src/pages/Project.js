import Navigation from "../Components/Navigation";
import ListProjects from "../Components/Projets/ListProjects";
import { useState } from "react";
import Footer from "../Components/Footer";

const Project = (props) => {
  const projet = [
    {
      id: 1,
      title: "Deez'web",
      date: "mars 2021",
      languages: "Html Css Java script",
      infos: "Site qui permet d'enregistrer des sons depuis l'api de deezer.",
      img: "/img/deezweb.jpg",
      link: "./js/deezer/login.html",
    },
    {
      id: 2,
      title: "React Calculatrice",
      date: "mai 2021",
      languages: "Java script, Css",
      infos: "Calculatrice réalisé avec la biblihothèque react",
      img: "img/calculette.png",
      link: "./js/build/index.html",
    },
  ];
  let [slide, setSlide] = useState(1);

  const nextSlide = () => {
    setSlide((slide += 1));
    if (slide > projet.length) {
      setSlide((slide = 1));
    }
  };
  const previousSlide = () => {
    setSlide((slide -= 1));
    if (slide < 1) {
      setSlide((slide = projet.length));
    }
  };

  return (
    <>
      <Navigation />
      <main>
        <section className="main">
          <ListProjects projet={projet.filter((p) => p.id === slide)} />
          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
          <button className="previous" onClick={previousSlide}>
            &#10094;
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Project;
