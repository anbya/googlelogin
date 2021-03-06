import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import {PostData} from './PostData';

export default class Loginapi extends Component {
    constructor(props) {
        super(props);
           this.state = {
           loginError: false,
           redirect: false
    };
    this.signup = this.signup.bind(this);
    }
    signup(res, type) {
        console.log(res);
        
        let postData;
        if (type === 'facebook' && res.email) {
        postData = {
             name: res.name,
             provider: type,
             email: res.email,
             provider_id: res.id,
             token: res.accessToken,
             provider_pic: res.picture.data.url
        };
       }
   
       if (type === 'google' && res.w3.U3) {
       postData = {
         name: res.w3.ig,
         provider: type,
         email: res.w3.U3,
         provider_id: res.El,
         token: res.Zi.access_token,
         provider_pic: res.w3.Paa
       };
   }
   
   if (postData) {
   PostData('signup', postData).then((result) => {
      let responseJson = result;
      sessionStorage.setItem("userData", JSON.stringify(responseJson));
      this.setState({redirect: true});
   });
   } else {}
   }
    render() {
        const responseGoogle = (response) => {
            console.log("google console");
            console.log(response);
            this.signup(response, 'google');
        }
        return (
            <div>
                <GoogleLogin
                    clientId="479648943921-ghb01de59osnmndq6asfd8sl18c8c54q.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                    buttonText="LOGIN WITH GOOGLE"
                    cookiePolicy={'single_host_origin'}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
            </div>
        )
    }
}
