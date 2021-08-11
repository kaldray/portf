import Projects from "./Projets/Projects";

const Slider = (props) => {
  const projet = props.projet;

  return (
    <>
      <div className="slider">
        <div className="items">
          {projet.map((projet) => (
            <Projects key={projet.id} {...(projet.id = "1")} />
          ))}
        </div>
        <button className="previous"></button>
        <button className="next"></button>
      </div>
    </>
  );
};

export default Slider;
