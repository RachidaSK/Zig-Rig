import {Component} from 'react';
// import '../Auth/Auth';
import {setIdToken, setAccessToken} from '../Auth/Auth';

class CallBack extends Component {

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