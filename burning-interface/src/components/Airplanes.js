import React, {Component} from 'react';
import axios from 'axios';
import AirplaneForm from './AirplaneForm';

class Airplanes extends Component {
    constructor () {
        super ();
        this.state = {
            airplanes: []
        };
    }

    render () {
        return (
            <div>
                <h1>Airplanes</h1>
                <AirplaneForm/>
            </div>
        )
    }
};

export default Airplanes;
