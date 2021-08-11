import Projects from "./Projects";

const ListProjects = (props) => {
  const projet = props.projet;
  


  return (
    <>
      {projet.map((projet) => (
        <Projects
          key={projet.id}
          {...projet}
        />
      ))}
    </>
  );
};

export default ListProjects;
