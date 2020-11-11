import React from 'react';

const Form = props => {
    return (
        <div className="container">
            <h1>Escribenos!</h1>
            <h4>Cuentanos tu problema y nos ponemos en contacto lo antes posible!</h4>
            <form action="">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <input type="text" placeholder="Nombre Completo" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <input type="text" placeholder="Correo Electronico" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <input type="text" placeholder="Teléfono" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <textarea name="detalles" id="detalles" cols="30" rows="10" placeholder="Cuentame aquí..." ></textarea>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;