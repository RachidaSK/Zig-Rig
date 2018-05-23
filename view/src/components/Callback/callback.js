import {Component} from 'react';
import {setIdToken, setAccessToken} from './authVariables.js';

class CallBack extends Component {
    constructor() {
        super();
    };

    componentDidMount() {
        setAccessToken();
        setIdToken();
        window.location.href = '/home';
    };

    render() {
        return null;
    };
};

export default CallBack;