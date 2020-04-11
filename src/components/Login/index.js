import React from "react";
import Form from 'react-bootstrap/Form';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GoogleLogin from 'react-google-login';
import './index.scss';
import { GOOGLE_CLIENT_ID, createCookieInHour, AUTH_TOKEN_NAME, AUTH_INFO, REDIRECT_URI } from "../../core/config/utils";
import { saveUserDetail } from "../../services/Login/actions";
import { addAuthToken } from "../../services/authService";
import Logo from "../Logo/Logo";

class Login extends React.Component {


    changeRoute = () => {
        this.props.history.push('/feed');

    }

    responseGoogle = (googleUser) => {
        if (googleUser && !googleUser.error) {
            var profile = googleUser.getBasicProfile(), id_token = googleUser.getAuthResponse().id_token, data = {};
            data = {
                userName: profile.getName(),
                userId: profile.getId(),
                email: profile.getEmail(),
                givenName: profile.getGivenName(),
                familyName: profile.getFamilyName()
            }
            addAuthToken(id_token);
            createCookieInHour(AUTH_TOKEN_NAME, id_token, 5);
            createCookieInHour(AUTH_INFO, JSON.stringify(data), 5)
            this.props.saveUserDetail(data);
            this.changeRoute();
        }
    }



    signOut = () => {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(() => {
            console.log('User signed out.');
        });
    }


    render() {
        return <div className="Login-container">
                <div className='welcomeText'>
                    Welcome to <br/> 
                    <Logo/>
                    <br/>
                    <br/>
                </div>
                <Form className="text-align-center">
                    <GoogleLogin
                        clientId={GOOGLE_CLIENT_ID}
                        buttonText="Log in with Google"
                        theme="dark"
                        width={380}
                        height={50}
                        longtitle={true}
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        isSignedIn={true}
                        className="google-login-btn"
                        // uxMode='redirect'
                        // redirectUri={REDIRECT_URI}
                    />
                </Form>
            </div>
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ saveUserDetail }, dispatch)
}
const mapStateToProps = (state) => {
    return {
        userData: state.login.userData
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);