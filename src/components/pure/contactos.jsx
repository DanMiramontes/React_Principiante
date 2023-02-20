import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ContactosComponent = ({contacto}) => {
    
    return (
        <div>
          <h2>
              Nombre : {contacto.name}
          </h2>
          <h2>
              Apellido : {contacto.lastname}
          </h2>
          <h3> 
              Email: {contacto.email}
          </h3>
          <h4>
               {contacto.conected ? 'Conectado En Linea':'Contacto No Disponible'}
          </h4>
      

        </div>
     
    );
};


ContactosComponent.propTypes = {
    contacto : PropTypes.instanceOf(Contacto)

};


export default ContactosComponent;
