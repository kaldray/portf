import React from "react";

const Contact = (props) => {
  return (
    <>
      <div ref={props.myRefContact} className="contact">
        <h2>Contact</h2>
        <div className="card">
          <a href="mailto:jordraykalenga@gmail.com">Contactez-moi.</a>
        </div>
      </div>
    </>
  );
};

export default Contact;
