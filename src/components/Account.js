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
                <p>Afficher les opérations ici.</p>
                <p>Charger le contenu du fichier <code>src/config/data.js</code></p>
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
