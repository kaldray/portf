import React, { useEffect } from "react";

const AnimationText = () => {
  let name = [" KALENGA"];

  useEffect(() => {
    let letterIndex = 0;
    let wordIndex = 0;
    let target = document.querySelector("#name");
    const createLetter = () => {
      const letter = document.createElement("span");

      target.appendChild(letter);

      letter.classList.add("letter");
      letter.style.opacity = "0";
      letter.style.animation = "anim 5s ease-in forwards";
      letter.textContent = name[wordIndex][letterIndex];

      setTimeout(() => {
        letter.remove();
      }, 2000);
    };

    const loop = () => {
      setTimeout(() => {
        if (wordIndex >= name.length) {
          wordIndex = 0;
          letterIndex = 0;
          loop();
        } else if (letterIndex < name[wordIndex].length) {
          createLetter();
          letterIndex++;
          loop();
        } else {
          letterIndex = 0;
          wordIndex++;
          setTimeout(() => {
            loop();
          }, 2000);
        }
      }, 80);
    };
    loop();
  });

  return (
    <>
    </>
  );
};

export default AnimationText;
