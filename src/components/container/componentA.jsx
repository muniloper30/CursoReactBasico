import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import ComponentB from './componentB';


const ComponentA = ({ contact }) => {
    return (
        <div>
            <p>
                Name : {contact.name}
            </p>
            <p>
                Lastname : {contact.lastname}
            </p>
            <p>
                Email : {contact.email}
            </p>
            <ComponentB inline = {true}></ComponentB>
        </div>
    );
};


ComponentA.propTypes = {
    Contact: PropTypes.instanceOf( Contact ),
};


export default ComponentA;


