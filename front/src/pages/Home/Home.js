import React, { useEffect, useRef, useState } from 'react';

import './home.css';

import logo1 from '../../assets/img/logo1.webp';
import logo2 from '../../assets/img/logo2.webp';
import logo3 from '../../assets/img/logo3.webp';
import logo4 from '../../assets/img/logo4.webp';
import marine from '../../assets/img/marine.webp';
import plante from '../../assets/img/plante.webp';
import neovie from '../../assets/img/neovie.webp';
import impot from '../../assets/img/impot.webp';
import cheque from '../../assets/img/cheque.webp';
import ethique from '../../assets/img/ethique.webp';


import Navbar from '../../components/common/Navbar/Navbar';
import Header from '../../components/common/Header/Header';
import InfoCard from '../../components/InfoCard/InfoCard';
import SocialMedia from '../../components/common/SocialMedia/SocialMedia';
import DiplomeSection from '../../components/Diplomes/DiplomeSection/DiplomeSection';
import SectionServices from '../../components/Services/SectionServices/SectionServices';
import Button from '../../components/common/Button/Button';
import Modal from '../../components/common/Modal/Modal';
import ContactForm from '../../components/Contact/ContactForm/ContactForm';



const Home = () => {

    const trustmaryRef = useRef(null);
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const toggleModal = () => setModalOpen(!isModalOpen);

    useEffect(() => {
        const loadTrustmaryScript = () => {
            if (scriptLoaded) {
                console.log('Script already loaded');
                return;
            }
    
            const script = document.createElement('script');
            script.src = 'https://widget.trustmary.com/ZdV7jyb08';
            script.async = true;
    
            const section = trustmaryRef.current;
            if (section) {
                section.appendChild(script);
                setScriptLoaded(true);
            } else {
                console.error('Element #trustmary-section not found in the DOM');
            }
        };
    
        if (document.readyState === 'complete') {
            loadTrustmaryScript();
        } else {
            window.addEventListener('load', loadTrustmaryScript);
        }
    
        return () => {
            window.removeEventListener('load', loadTrustmaryScript);
        };
    }, [scriptLoaded]);
    
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
            <section className="thirdSection">
                <h2>Oser le changement, révélez votre potentiel</h2>

                <p className="serviceText">Un voyage de transformation à travers:</p>

                <SectionServices/>

               <p className="serviceText">Grâce à ces diffèrentes <strong>méthodes thérapeutiques</strong>, nous découvrons ensemble ce qui bloque ou freine l'atteinte de <strong>vos objectifs</strong> ou de <strong>votre épanouissement</strong></p>
               <p className="serviceText">Dans le respect de votre rythme et de vos intentions, je vous aide à faire naître la version de vous-même qui vous convient, l'être qui vous habite, vos projets, ce qui vous tient à coeur, le parent que vous êtes, l'amant(e) qui sommeille en vous, les relations harmonieuses que vous souhaitez vivre.</p>

               <div className="planteWrapper">
                    <img className="planteImg" src={plante} alt="plantation plante"/>
                    <div className="planteText">
                        <p className="serviceText">Je suis également <strong>sage-femme</strong> et c'est tout naturellement que mon activité professionnelle à évolué vers le domaine de la <strong>santé mentale</strong> et du <strong>bien-être</strong>.</p>
                        <p className="serviceText">Je suis donc plus spécialisée dans tout ce qui touche à la <strong>femme</strong>, au <strong>couple</strong>, aux <strong>relations amoureuses</strong>, à la <strong>famille</strong>, à la <strong>grossesse</strong>, à la <strong>naissance</strong> d'un enfant, à son <strong>éducation</strong>, au "métier" de <strong>parent(s)</strong>.</p>
                     </div>
               </div>

               <button className="rdvBtn" type="button">Prendre rendez-vous <i className="fas fa-arrow-right"></i></button>
            </section>
            <section className="fourSection">
                <h2>Tarifs*</h2>

                <p className="tarifText">Séance  individuelle: 60€ à 100€ la séance.</p>
                <p className="tarifText">Séance de couple ou en famille: 100€ la séance.</p>
                <p className="tarifExplication">La durée des séances peut varier de 1h à 2h et elles s’effectuent une à deux fois par mois en fonction des besoins. </p>
                <p className="tarifExplication">La thérapie brève se fait généralement sur une moyenne de 10 séances par problématique</p>

                <Button colorStyle="purpleBtn" text="Contact" onClick={toggleModal} />
                <Modal isOpen={isModalOpen} onClose={toggleModal}>
                    <ContactForm />
                </Modal>

                <p className="tarifExplication">Merci de prévenir le plus tôt possible d'un changement ou d'une annulation. Tout rendez-vous non honoré et non justifié moins de 48 heures en avance sera dû.</p>
                <p className="asterix">* La prestation délivrée par ce professionnel ne fait pas l'objet d'un conventionnement. Dès lors, elle n'est pas prise en charge par la sécurité sociale. Certaines mutuelles peuvent rembourser ses services, vous pouvez lui demander une facture. Le montant des honoraires fixé est cependant déterminé avec tact et mesure.</p>
                <span className="neovieTitle">Retrouve moi aussi sur </span>
                <img className="neovieLogo" src={neovie} alt="logo neovie"/>

                <div className="impotWrapper">
                    <img className="impotCheque" src={impot} alt="logo crédit d'impot"/>
                    <p className="impotText">Réglement possible par chèque emploi service universel CESU et crédit d'impôts accessible</p>
                    <img className="impotCheque" src={cheque} alt="logo cheque emploi service"/>
                </div>
            </section>
            <section className="avisSection">
                <h2 className="avisTitle">Quand le changement prend racine: vos témoignages sont précieux</h2> 
                <div ref={trustmaryRef} id="trustmary-section">           
               </div>
            </section>
            <section className="ethiqueSection">
                <h2>Ethique professionnelle</h2>

                <p className="ethiqueText">En conformité avec le code de déontologie de la FF2P (Fédération Française de Psychanalyse et de Psychothérapie) à laquelle je suis adhérente , je m’engage à respecter le <strong>secret professionnel</strong> et la <strong>confidentialité</strong> de nos échanges.</p>
               
                <img className="ethiqueImg" src={ethique} alt="livre avec un cadenas"/>

                <p className="ethiqueText">Je m’autorise à déroger à cette règle avec votre accord en cas de danger possible pour vous, dans le cadre d’éventuelles violences que vous subiriez ou si vos difficultés sont en dehors de mon champ de compétences.</p>
                <p className="ethiqueText">Les données transmises ne sont utilisées qu’à visée d’orientation et réduites au strict nécessaire.</p>
                <p className="ethiqueText">Mon accompagnement ne se substitue pas à un suivi médical et toute gestion d’un éventuel traitement médicamenteux ne rentre pas dans ma zone de responsabilité. </p>
                <p className="ethiqueText">Je soumets ma pratique à une supervision régulière de mon travail à des superviseurs expérimentés. Cette supervision m’est indispensable selon moi et elle m’aide à être dans une relation thérapeutique saine, pour mieux accompagner mes consultants selon leur problèmatique et les résonnances chez moi.</p>
                <p className="ethiqueText">Je m’engage également à une formation continue en participant fréquemment à des stages, des séminaires, des ateliers et des perfectionnements professionnels.</p>
            </section>





          
        </main>
    </>
  );
};

export default Home;