import React from "react";
import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GoogleLogin from 'react-google-login';
// import { GoogleLogout } from 'react-google-login';
import './index.scss';
import { GOOGLE_CLIENT_ID, createCookieInHour, AUTH_TOKEN_NAME } from "../../core/config/utils";
import { saveUserDetail } from "../../services/Login/actions";
class Login extends React.Component {


    responseGoogle = (googleUser) => {
        var profile = googleUser.getBasicProfile(), id_token = googleUser.getAuthResponse().id_token, data = {};
        createCookieInHour(AUTH_TOKEN_NAME, id_token, 5);
        data = {
            userName: profile.getName(),
            userId: profile.getId(),
            emailId: profile.getEmail()

        }
        this.props.saveUserDetail(data);
        this.setState({
            isRedirect: true
        })

    }

    signOut = () => {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(() => {
            console.log('User signed out.');
        });
    }


    render() {
        return <div className="Login-container">

            <h1 className="text-align-center">Welcome Back</h1>
            <Container>
                <Row>
                    <Col sm={3}>
                    </Col>
                    <Col sm={6}>
                        <Form className="text-align-center">
                            <GoogleLogin
                                clientId={GOOGLE_CLIENT_ID}
                                buttonText="Sign in with Google"
                                theme="dark"
                                width={380}
                                height={50}
                                longtitle={true}
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                isSignedIn={true}
                            />
                        </Form>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>

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