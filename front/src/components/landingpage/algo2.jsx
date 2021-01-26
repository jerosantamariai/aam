import React from 'react';
import CobOnl from '../../img/logoCO.png';
import LogoPP from "../../img/logoProtegePyme.png";

const AlgoDos = props => {
    return (
        <div className="container2 d-flex">
            <div className="co">
                <img src={CobOnl} className="CobOnl" alt="CobOnl" />
                <h1>Cobranza extrajudicial</h1>
                <h3>“Si no recuperas, no pagas”</h3>
            </div>
            <div className="pp">
                <img src={LogoPP} className="LogoPP" alt="LogoPP" />
                
            </div>
        </div>
    );
}

export default AlgoDos;