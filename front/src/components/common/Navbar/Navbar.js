import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

import SocialMedia from '../SocialMedia/SocialMedia';

const Navbar = () => {

    const navigate = useNavigate();

    const links = [
        { text: "ACCUEIL", url: "/accueil" },
        { text: "MON PARCOURS", url: "/mon-parcours" },
        { text: "THERAPIE SYSTEMIQUE", url: "/therapie-systemique" },
        { text:"CONSTELLATIONS FAMILIALES", url:"/constellations-familiales"},
        { text: "PSYCHOCORPORELLE", url: "/psychocorporelle" },
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
                  </div>
                  <div className="canvas-footer">
                      <div className="infoContainer">
                          <div className="phoneInfo">
                              <div className="phoneIcone">
                                  <i className="fa fa-2x fa-phone"></i>
                              </div>       
                              <div className="phoneText">
                                  <span>Tel</span>
                                  <span>07.60.45.44.90</span>
                              </div>
                          </div>
                          <div className="hoursInfo">
                              <div className="hoursIcone">
                              <i className="fa fa-2x fa-clock"></i>
                              </div>       
                              <div className="hoursText">
                                  <span>Horaires</span>
                                  <span>Lun-Sam: 09H-18H</span>
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