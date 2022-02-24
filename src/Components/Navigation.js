import React, { useEffect, useState } from "react";

const Navigation = (props) => {
  const [toggle, setToggle] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  // set toggle to false on resize
  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
      if (window.innerWidth > 480) setToggle(false);
    };
    window.addEventListener("resize", changeWidth);

    return () => window.removeEventListener("resize", changeWidth);
  }, []);

  useEffect(() => {
    let body = document.querySelector("main");
    let btn = document.querySelector(".btn");
    body.addEventListener("click", function () {
      btn.classList.toggle("open", false);
      setToggle(false);
    });
  }, []);

  //scroll to section pages
  function executeScrollToElem(myref) {
    myref.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  const switchToggleMenuHmab = () => {
    setToggle(!toggle);
    let btn = document.querySelector(".btn");
    btn.classList.toggle("open");
  };

  return (
    <header>
      <nav>
        <div className="navigation">
          {(toggle || largeur > 480) && (
            <ul className="ul">
              <li
                onClick={() => executeScrollToElem(props.myRefHome.current)}
                className="li"
              >
                Accueil
              </li>
              <li
                onClick={() => executeScrollToElem(props.myRefProject.current)}
                className="li"
              >
                Projets
              </li>
              <li
                onClick={() =>
                  executeScrollToElem(props.myRefCompetences.current)
                }
                className="li"
              >
                Compétences
              </li>
              <li
                onClick={() => executeScrollToElem(props.myRefContact.current)}
                className="li"
              >
                Contact
              </li>
            </ul>
          )}
          <button onClick={switchToggleMenuHmab} className="btn">
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
