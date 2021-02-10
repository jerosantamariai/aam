import React from 'react';
import CobOnl from '../../img/logoCO.png';
import LogoPP from "../../img/logoProtegePyme.png";

const OurJob = props => {
    return (
        <section className="container2">
            <div className="top pt-5">
                <h1>¿Como trabajamos?</h1>
            </div>
            <div className="mid d-flex pb-2">
                <div className="co my-auto">
                    <img src={CobOnl} className="CobOnl" alt="CobOnl" />
                </div>
                <div className="arrow pt-5">
                    <i className="fas fa-arrow-circle-right"></i>
                </div>
                <div className="pp my-auto">
                    <img src={LogoPP} className="LogoPP" alt="LogoPP" />
                </div>
            </div>
            <div className="bottom d-flex justify-content-center pb-5">
                <div>
                    <h1>Cobranza extrajudicial</h1>
                    <h3>“Si no recuperas, no pagas”</h3>
                </div>
                <ul className="justify-content-center">
                    <li>Presentamos las demandas de cobro dentro de 48 hrs. Desde que se envían todo los antecedentes solicitados.</li>
                    <li>Te informamos periódicamente del estado del juicio</li>
                    <li>Protegemos a las Pymes</li>
                    <li>Cobramos precios justos, según el monto y fecha de la deuda. Cotiza en el mercado!</li>
                </ul>
            </div>
        </section>
    );
}

export default OurJob;