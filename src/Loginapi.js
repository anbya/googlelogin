import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';

export default class Loginapi extends Component {
    render() {
    const responseGoogle = (response) => {
      console.log(response);
    }
        return (
            <div>
                <GoogleLogin
                    clientId="479648943921-ghb01de59osnmndq6asfd8sl18c8c54q.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                    buttonText="LOGIN WITH GOOGLE"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
            </div>
        )
    }
}
