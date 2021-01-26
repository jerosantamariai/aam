import React from 'react';
import CobOnl from '../../img/logoCO.png';
import LogoPP from "../../img/logoProtegePyme.png";

const OurJob = props => {
    return (
        <div className="container2">
            <div className="top">
                <h1>¿Como trabajamos?</h1>
            </div>
            <div className="mid d-flex">
                <div className="co">
                    <img src={CobOnl} className="CobOnl" alt="CobOnl" />
                    <h1>Cobranza extrajudicial</h1>
                    <h3>“Si no recuperas, no pagas”</h3>
                </div>
                <div className="pp">
                    <img src={LogoPP} className="LogoPP" alt="LogoPP" />
                </div>
            </div>
            <div className="bottom justify-content-center">
                <ul className="justify-content-center">
                    <li>Presentamos las demandas de cobro dentro de 48 hrs.
                Desde que se envían todo los antecedentes solicitados.</li>
                    <li>Te informamos periódicamente del estado del juicio</li>
                    <li>Protegemos a las Pymes</li>
                    <li>Cobramos precios justos, según el monto y fecha de la deuda. Cotiza en el mercado!</li>
                </ul>
            </div>
        </div>
    );
}

export default OurJob;