import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ComponentB = (inline) => {
    const [conectado, setConectado ] = useState(inline)
    return (
        <div>
            <h3>
                {
                    conectado === false ? 'Contacto no disponible ' : 'Contacto en línea'
                }
            </h3>
            <button onClick={() => setConectado(!conectado)}>{conectado === false ? 'Conectado' : 'Desconectado'}</button>
        </div>
    );
};


ComponentB.propTypes = {
    inline: PropTypes.bool,
};


export default ComponentB;
