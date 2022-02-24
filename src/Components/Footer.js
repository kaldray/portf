import React from "react";

const Footer = () => {
  const goToSocialMedia = (p) => {
    if (p === "github") {
      window.location.href = "https://github.com/kaldray/";
    } else if (p === "linkedin") {
      window.location.href =
        "https://www.linkedin.com/in/jordray-kalenga-330b7919b/";
    }
  };
  return (
    <>
      <footer>
        <div className="social">
          <img
            onClick={() => goToSocialMedia("github")}
            src="./img/github.png"
            alt="github"
          />
          <img
            onClick={() => goToSocialMedia("linkedin")}
            src="./img/linkedin.png"
            alt="linkedin"
          />
        </div>
        <span>Jordray KALENGA, Tous droits réservés. &copy; </span>
      </footer>
    </>
  );
};

export default Footer;
