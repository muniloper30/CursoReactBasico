// Componente tipo clase 
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greating extends Component {



    
    constructor(props) {
        super(props);
        this.state = {
            age : 30
        }
    }

    render() {
        return (
            <div>
                <h1>
                    ¡Hola {this.props.name}!
                </h1>
                <h2>
                    Tu edad es de : {this.state.age}
                </h2>
            <div>
                <button onClick={this.birthay}>
                    Cumplir años
                </button>
            </div>
            </div>
        );
    }
    birthay = () => {
        this.setState((prevState) => (
            {
                age: prevState.age +1
            }
        ))
    }

}


Greating.propTypes = {
    name: PropTypes.string,
};


export default Greating;
