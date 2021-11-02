import React from "react";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";

const Home = () => {
  return (
    <>
      <Navigation />
      <main className="home">
        <section className="me">
          <h1>Jordray KALENGA</h1>
          <h2>Développeur web junior</h2>
        </section>
        <section className="presentation">
          <p>
            Je suis étudiant en développement web. Mon objectif à court terme est de trouver une alternance afin
            d'acquerir de l'éxperience et continuer mon apprentisage à l'école. Je vous laisse visualiser mes différents projets sur cette même page.
          </p>
          <a href="./files/CVjordraykalenga.pdf">Consulter mon CV</a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
