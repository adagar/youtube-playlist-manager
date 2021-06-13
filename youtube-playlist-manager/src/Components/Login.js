import React from 'react';
import { GoogleLogin } from 'react-google-login';
import {refreshTokenSetup} from '../utils/refreshToken';
import {UserContext} from '../user-context';

export default function Login() {
    const onFailure = (res) => {
        console.log('[LOGIN FAILURE] res:', res);
    }

    return (
        <UserContext.Consumer>
            {({user, initUser}) => (
                <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Log in with Google"
                onSuccess={initUser}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />    
        )}
                        
        </UserContext.Consumer>
    )
}

