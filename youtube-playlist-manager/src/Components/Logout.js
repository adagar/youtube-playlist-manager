import React from 'react'
import { GoogleLogout } from 'react-google-login'

export default function Logout() {
    const onSuccess = () => {
        alert('Logout successful');
    }

    return (
        <div>
            <GoogleLogout
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}
