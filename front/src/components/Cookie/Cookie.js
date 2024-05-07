import React from 'react';

import './cookie.css';

const Cookie = () => {
  return (
    <div className="cookieWrapper">
        <h2>Politique de Confidentialité et Utilisation des Cookies</h2>

        <div className="contentCookie">
            <h3 className="cookieTitle">1. Collecte des Données Personnelles</h3>
            <p className="cookieText">Nous accordons une grande importance à la protection de votre vie privée. 
               Lors de votre visite sur notre site, nous pouvons recueillir les données personnelles que vous nous fournissez (telles que votre nom, adresse email, etc.) uniquement à des fins spécifiques mentionnées au point de collecte.
            </p>
            <p className="cookieText">Ces informations sont utilisées pour mieux répondre à vos demandes et améliorer nos services.</p>
        </div>

        <div className="contentCookie">
            <h3 className="cookieTitle">2. Utilisation des Cookies</h3>
            <p className="cookieText">Notre site utilise des cookies uniquement pour des raisons de sécurité. Ces cookies sont essentiels pour assurer la protection et l'intégrité de nos services en ligne et votre interaction avec le site.</p>
            <p className="cookieText">Ils ne suivent pas votre activité de navigation et ne collectent aucune donnée personnelle en dehors de celles nécessaires pour sécuriser votre navigation.</p>
        </div>

        <div className="contentCookie">
            <h3 className="cookieTitle">3. Gestion de vos préférences</h3>
            <p className="cookieText">Étant donné que les cookies que nous utilisons sont cruciaux pour la sécurité du site, ils ne peuvent pas être désactivés.</p>
            <p className="cookieText">Toutefois, vous pouvez ajuster les paramètres de votre navigateur pour être informé des cookies ou pour les bloquer, mais cela pourrait affecter la fonctionnalité du site.</p>
        </div>

        <div className="contentCookie">
          <h3 className="cookieTitle">4. Sécurité de vos Données Personnelles</h3>
          <p className="cookieText">Nous appliquons des mesures de sécurité strictes pour protéger vos données personnelles contre l'accès non autorisé, l'altération, la divulgation ou la destruction.</p>
        </div>

        <div className="contentCookie">
          <h3 className="cookieTitle">5. Partage des Informations</h3>
          <p className="cookieText">Nous ne partageons vos données personnelles avec des tiers que lorsque cela est nécessaire pour fournir nos services ou si la loi l'exige.</p>
        </div>

        <div className="contentCookie">
          <h3 className="cookieTitle">6. Vos Droits</h3>
          <p className="cookieText">Vous avez le droit de demander l'accès, la rectification ou l'effacement de vos données personnelles. Vous pouvez également vous opposer à leur traitement ou demander une limitation de ce traitement.</p>
          <p className="cookieText">Pour toute question ou demande concernant la protection de vos données personnelles, veuillez nous contacter à contact@marine-ottaviani.com.</p>
        </div>

        <div className="contentCookie conclusionCookie">
            <p className="cookieText">En utilisant notre site, vous reconnaissez comprendre et accepter notre utilisation des cookies pour des raisons de sécurité.</p>
        </div>  
    </div>
  );
};

export default Cookie;