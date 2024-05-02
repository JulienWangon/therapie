import React from 'react';

import './home.css';

import logo1 from '../../assets/img/logo1.webp';
import logo2 from '../../assets/img/logo2.webp';
import logo3 from '../../assets/img/logo3.webp';
import logo4 from '../../assets/img/logo4.webp';
import marine from '../../assets/img/marine.webp';


import Navbar from '../../components/common/Navbar/Navbar';
import Header from '../../components/common/Header/Header';
import InfoCard from '../../components/InfoCard/InfoCard';
import SocialMedia from '../../components/common/SocialMedia/SocialMedia';
import DiplomeSection from '../../components/Diplomes/DiplomeSection/DiplomeSection';


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
                    <div className="infoCardWrapper">
                        <InfoCard imageSrc={logo1} alt='à définir' primaryText='Séance individuelle'/>
                        <InfoCard imageSrc={logo2} alt='à définir' primaryText='Thérapie de couple'/>
                        <InfoCard imageSrc={logo3} alt=" à définir" primaryText='Thérapie familiale' secondaryText='Soutien à la parentalité'/>
                        <InfoCard imageSrc={logo4} alt=" à définir" primaryText='Ateliers collectifs'/>
                    </div>
                    <div className="textInfoCard">
                        <p>
                            La thérapie brève se déroule généralement en <strong>10 séances par problématique</strong>.
                            La <strong>durée des séances</strong> peut varier <strong>de 1h à 2h</strong> et elles s’effectuent <strong>une à deux fois par mois</strong> en fonction des besoins.
                        </p>
                        <p>
                            Les ateliers collectifs en <strong>constellations familiales</strong> et systémiques ont lieu <strong>trimestriellement</strong>. 
                        </p>
                        <p>
                            Quelque soit votre besoin, vous pouvez me contacter initialement par téléphone :
                            j’effectue régulièrement des permanences téléphoniques.
                        </p>

                        <button type="button" className="rdvBtn">Prendre rendez-vous</button>
                    </div>

                </div>
                <img className="portrait" src={marine} alt="portrait de Mme Ottaviani Marine"/>
                <div className="bottomSecondSection">
                    <div className="textPhotoWrapper">
                        <p>
                            Je suis <strong>psychopraticienne</strong> et je vous accompagne dans un cadre <strong>confidentiel</strong> et <strong>bienveillant</strong>. 
                        </p>
                        <p>
                            En créant un espace d'écoute et de parole sécurisant, je vous aide à explorer vos  émotions, 
                            à comprendre vos comportements et à <strong>trouver vos propres solutions</strong> pour <strong>surmonter vos difficultés</strong>.
                        </p>
                        <p>
                            Je suis également sage-femme et c'est tout naturellement que mon activité professionnelle a évolué vers le domaine de la santé mentale et du bien-être.
                        </p>
                        <p>
                            Je suis donc plus spécialisée dans tout ce qui touche à la <strong>femme</strong>, au <strong>couple</strong>, aux <strong>relations amoureuses</strong>, 
                            à la <strong>famille</strong>, à la <strong>grossesse</strong>, à la <strong>naissance d'un enfant</strong>, à son <strong>éducation</strong>, au "métier" de parent(s).
                        </p>
                    </div>
                    <SocialMedia className="socialBody"/>
                    <DiplomeSection/>

                </div>
            </section>





          
        </main>
    </>
  );
};

export default Home;