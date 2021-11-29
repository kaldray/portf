const Projects = (props) => {
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
      <div className="container" style={background} onClick={goTolinkProjetcs}>
        <div className="slider-content">
          <div style={props.color} className="base">
            <h1 className="title">{props.title}</h1>
            <p className="languages">{props.languages}</p>
          </div>
          <div className="infos">
            <p style={props.color}>{props.infos}</p>
            <span style={props.color} className="date">
              {props.date}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
