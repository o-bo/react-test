import React, { Component } from 'react';
import R from 'ramda';

import items from '../config/data';

class Account extends Component {

  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column col-4"></div>
          <div className="column col-4">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Mon compte</h4>
                <h6 className="card-subtitle">Dernières opérations : toutes</h6>
              </div>
              <div className="card-body">
                <p>
                  Afficher les opérations ici<br />
                  Une opération (ou item) = un titre, une date et un montant en €
                </p>
                <p>
                  Charger le contenu du fichier <code>src/config/data.js</code><br />
                  Gérer les différents filtres ci-dessous (validée = item.checked === true)<br />
                  Changer la valeur checked d'un item en cliquant sur un bouton<br />
                  Utiliser les flexbox pour le positionnement des éléments
                </p>
                <p>Le thème utilisé est <a href="https://picturepan2.github.io/spectre/index.html#introduction">spectre.css</a></p>
                <p>La librairie d'utilitaires proposée est <a href="http://ramdajs.com/docs/#">ramda</a></p>
                <p>L'affichage des dates est fait avec <a href="https://momentjs.com/">moment</a></p>
              </div>
              <div className="card-footer">
                <div className="btn-group btn-group-block">
                  <button
                    className="btn"
                  >
                    Voir les validées
                  </button>
                  <button
                    className="btn"
                  >
                    Voir les invalidées
                  </button>
                  <button
                    className="btn"
                  >
                    Voir toutes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="column col-4"></div>
        </div>
      </div>
    );
  }
}

export default Account;
