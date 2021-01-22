import React from 'react';
import MacLogo from '../../img/macLogo.png'

const AlgoUno = props => {
    return (
        <section className="container1 d-flex">
            <div className="photo">
                <img src={MacLogo} className="macLogo" />
            </div>
            <div className="content">
            <h1 className="d-flex justify-content-center pt-5"><strong>!Cobranza judicial de documentos impagos!</strong></h1>
            <h2 className="d-flex justify-content-center pt-5">Facturas, cheques y pagarés.</h2>
            <p className="d-flex justify-content-center pt-5">Estudio jurídico 100% online</p>
            </div>
        </section>
    );
}

export default AlgoUno;