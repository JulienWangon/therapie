import React from 'react';

import './home.css';

import Navbar from '../../components/common/Navbar/Navbar';
import Header from '../../components/common/Header/Header';


const Home = () => {
  return (
    <>
        <Navbar/>
        <Header/>

        <main className="homMain">
            <div className="titleWrapper">
                <h1 className="homeTitle">Thérapie brève systèmique</h1>
                <span className="titleSlogan">Relation à soi, couple, famille</span>
            </div>

            <section className="firstSection">
                <div className="logoWrapper">            
                    <div className="backgroundLogo">
                        <div className="topLogo">
                            <span className="spanTitle">Pour qui ?</span>
                            <p className="pourText">Adulte, couple, enfant, adolescent, famille en difficulté et/ou en souffrance</p>
                        </div>

                        <div className="spaceLogo"></div>

                        <div className="bodyLogo">
                            <span className="spanTitle">Pourquoi ?</span>
                            <p className="pourText">Anxiété, stress, crise d'angoisse, peur panique, troubles alimentaires, problèmes relationnels, mauvaise gestion émotionnelle, phobie, dépression, manque de confiance en soi, conflits répétitifs, dépendance affective, communication difficile, incompréhension dans le couple, troubles sexuels, infidélité, mauvais vécu de la grossesse, accouchement difficile, comportement perturbateur de l'enfant, lien parent(s)-enfant(s) compliqué, séparation complexe, divorce conflictuel, deuil.</p>
                        </div>
                        <div className="spaceLogo"></div>

                        <div className="footerLogo">
                            <span className="spanTitle">Où ?</span>
                            <ul>
                              <li className='ouItem'>Séance en cabinet à Metz</li>
                              <li className='ouItem'>Rendez-vous en visioconférence</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="commentWrapper">
                    <span className="spanTitle">Comment ?</span>
                    <p className="comment">Mon approche est souvent ciblée, concrète et limitée dans le temps, avec un accent mis sur la résolution de problèmes spécifiques plutôt que sur une exploration approfondie des mécanismes psychologiques.</p>
                </div>

                <div className="citationWrapper">
                    <blockquote className="citation">"Tout ce que je sais, c'est que je ne sais rien"</blockquote>
                    <div className="socrate"><span>Socrate</span></div> 
                    <p className="citationText">
                      Nous découvrons ensemble comment le problème qui vous pèse s’est installé.
                      Vous possédez les ressources nécessaires pour résoudre  vos difficultés et mon rôle est de vous aider à identifier et à utiliser ces ressources de manière efficace.
                    </p>
                </div>                  
            </section>
            <section className="secondSection">
                <div className="topSecondSection">
                    <h2 className="h2SecondSection">Un accompagnement pour créer le changement et retrouver votre autonomie.</h2>
                </div>
                <div className="bottomSecondSection">

                </div>
            </section>





          
        </main>
    </>
  );
};

export default Home;