import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

//Breve introducción a useState
// const [variable, método para atualizaro] = useState(valor inicial)
const [age, setage] = useState(30);

const birthay = () => {
    //actualizamos el State
    setage(age + 1);
}

    return (
        <div>
                <h1>
                    ¡Hola {props.name} desde compontente funcional !
                </h1>
                <h2>
                    Tu edad es de : {age}
                </h2>
            <div>
                <button onClick={birthay}>
                    Cumplir años
                </button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name : PropTypes.string,
};


export default GreetingF;
