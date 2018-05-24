import React, { Component } from 'react';
import '../../components/Auth/Auth';
import { login } from '../../components/Auth/Auth';

class LandingPage extends Component {

    render() {
        return (
            <div>
                <h2>Welcome to Zig-Rig! Zig-Rig is a simple, easy-to-use online  planning tool for <br />
                    calculating electrical power distribution for a multitude of power sources.</h2>
                <button onClick={login} />
            </div>
        )

    }

}

// this does work but the problem is when you try to set and get the tokens after login
export default LandingPage;