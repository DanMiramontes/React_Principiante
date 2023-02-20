import React from 'react';
import { useState } from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactosComponent from '../pure/contactos';


const ContactList = () => {
    
    const [conexion,setconexion] = useState(false);
    const toogleChange =()=> {
            setconexion(!conexion);
    }  
    const defaultContact = new Contacto('name','lastname','email',conexion);
    return (
        <div>
           <ContactosComponent contacto={defaultContact}></ContactosComponent> 
           <div>
            <button onClick={toogleChange}> Conectar
            </button>
           </div>       
        </div>
    );
};

export default ContactList;
