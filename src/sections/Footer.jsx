import React from "react";
import "../sass/sections/footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className='container-footer'>
      <div className='names-box'>
        <h3>Designed and built by</h3>
        <div className='container-list'>
         
        </div>
      </div>

      <div className='rights-box'>
        <p>
          ©2022  All rights reserved
          <a
            target='_blank'
            href='https://jason.codes/cookie-policy/'
            rel='noopener noreferrer'
          >
            Cookie Policy
          </a>
        </p>
        <p>
          Data provided by
          <a
            target='_blank'
            href='https://www.themoviedb.org/'
            rel='noopener noreferrer'
          >
            TMDb
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
