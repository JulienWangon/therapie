import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

import SocialMedia from '../SocialMedia/SocialMedia';
import Button from '../Button/Button';

const Navbar = () => {

    const navigate = useNavigate();

    const links = [
        { text: "ACCUEIL", url: "/accueil" },
        { text: "QUI SUIS-JE ?", url: "/mon-parcours-professionnel" },
        { text: "THERAPIE BRÈVE SYSTEMIQUE", url: "/therapie-breve-systemique" },
        { text:"CONSTELLATIONS FAMILIALES", url:"/constellations-familiales"},
       
    ];
    
    const handleNavigate = (url) => {
        navigate(url);
    };

  
    return (
      <nav className="navbar bg-body-tertiary fixed-top">

          <div className="container-fluid">

              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                  <div className="offcanvas-header">
                     
                      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>

                  <div className="offcanvas-body">
                      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                          {links.map((link, index) => (
                              <li className="navItem" key={index}>
                                  <a 
                                      href={link.url} 
                                      onClick={(e) => {
                                          e.preventDefault();
                                          handleNavigate(link.url);
                                      }} 
                                        className="navLink"
                                  >
                                      {link.text}
                                  </a>
                              </li>
                            ))}
                      </ul>
                    
                      <SocialMedia className="cardNavbar"/> 
                      <div className="rdvBtncontainer">
                            <Button text="Prendre rendez-vous" className="rdvNav"/>
                  </div>
                    <div className="canvas-footer">
                        <div className="infoContainer">
                            <div className="hoursContainer">
                                    <div className="hoursInfo">  
                                        <i className="fa fa-2x fa-clock"></i>
                                        <span className="hoursText">Horaires</span> 
                                    </div>
                                    <div className="hoursList">
                                        <ul className="listHour">
                                            <li className="hourItem">Lundi, Mardi, Jeudi : 09h-13h; 14h-18h </li>
                                            <li className="hourItem">Mercredi : 08h-12h</li>
                                            <li className="hourItem">Vendredi : 14h-20h</li>
                                        </ul>
                                    </div>
                            </div>
                            <div className="permTel">
                                <p>Rendez-vous téléphonique gratuit et sans engagement: <a href="https://www.crenolibre.fr/prendre-rdv/89991_psychopraticienne">Ici</a></p>


                            </div>
                        </div>
                    </div>                     
                  </div>
              </div>
          </div>
      </nav>
    );
};

export default Navbar;