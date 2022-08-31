import React, { useRef } from "react";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import ListProjets from "../Components/Projets/ListProjects";
import { ReactComponent as Css } from "../files/css-3.svg";
import { ReactComponent as Html } from "../files/html5-2.svg";
import { ReactComponent as Firebase } from "../files/firebase-1.svg";
import { ReactComponent as Github } from "../files/github-2.svg";
import { ReactComponent as Js } from "../files/logo-javascript.svg";
import { ReactComponent as ReactLogo } from "../files/react-1.svg";
import { ReactComponent as Sass } from "../files/sass-1.svg";
import { ReactComponent as Styled } from "../files/styled-components-1.svg";
import Contact from "../Components/Contact";

const Home = () => {
  const myRefHome = useRef(null);
  const myRefProject = useRef(null);
  const myRefCompetences = useRef(null);
  const myRefContact = useRef(null);
  const projetRef = useRef(null);

  return (
    <React.Fragment>
      <Navigation
        myRefHome={myRefHome}
        myRefProject={myRefProject}
        myRefCompetences={myRefCompetences}
        myRefContact={myRefContact}
      />
      <main>
        <div ref={myRefHome} className="home">
          <section className="me">
            <h1>Jordray KALENGA</h1>
            <h2>Développeur web front-end</h2>
            <p>
              Je suis étudiant en développement web. Mon objectif à court terme
              est de trouver une alternance afin d'acquerir de l'éxperience et
              continuer mon apprentisage à l'école. Je vous laisse visualiser
              mes différents projets sur cette même page. Sur un plus long terme
              je voudrais devenir développeur fullstack que cela soit avec
              NodeJS ou bien Django. Je suis très ouvert et désireux d'apprendre
              !
            </p>
            <button>
              <a href="./files/CVjordraykalenga.pdf">Consulter mon CV</a>
            </button>
          </section>
        </div>
        <h2 className="title-project">Projets</h2>
        <div ref={myRefProject} className="projet-container">
          <ListProjets projetRef={projetRef} />
        </div>
        <section className="marquee-container">
          <h2 ref={myRefCompetences}>Compétences</h2>
          <div className="marquee">
            <Html></Html>
            <Css></Css>
            <Js></Js>
            <Sass></Sass>
            <ReactLogo></ReactLogo>
            <Styled></Styled>
            <Firebase></Firebase>
            <Github id="github"></Github>
            <Html></Html>
            <Css></Css>
            <Js></Js>
            <Sass></Sass>
            <ReactLogo></ReactLogo>
            <Styled></Styled>
            <Firebase></Firebase>
            <Github></Github>
          </div>
        </section>
        <Contact myRefContact={myRefContact}></Contact>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
