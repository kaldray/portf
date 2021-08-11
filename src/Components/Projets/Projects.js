import { useState } from "react";
const Projects = (props) => {
  const [hover, setHover] = useState({ display: "none" });

  const [img, link] = [props.img, props.link];

  const background = {
    backgroundImage: `url(${img})`,
  };

  const goTolinkProjetcs = (event) => {
    event.preventDefault();
    window.location.href = `${link}`;
  };

  return (
    <>
      <div
        className="container"
        onMouseEnter={(e) => {
          setHover({ display: "flex" });
        }}
        onMouseLeave={(e) => {
          setHover({ display: "none" });
        }}
        style={background}
        onClick={goTolinkProjetcs}
      >
        <div className="slider-content">
          <div className="base">
            <h1 className="title">{props.title}</h1>
            <p className="languages">{props.languages}</p>
          </div>
          <div className="infos" style={hover}>
            <p>{props.infos}</p>
            <span className="date">{props.date}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
