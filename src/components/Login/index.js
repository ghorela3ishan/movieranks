import React from "react";
import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import './index.scss';
import { GOOGLE_CLIENT_ID } from "../../core/config/utils";
export default class Login extends React.Component {

    responseGoogle = (googleUser) => {

        var profile = googleUser.getBasicProfile();
        var id_token = googleUser.getAuthResponse().id_token; // send this to BE server. 
        console.log('Authenticate Token' + id_token);
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    }

    signOut = () => {
        console.log("Signout function");
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
                            />,
                            <GoogleLogout
                                clientId={GOOGLE_CLIENT_ID}
                                buttonText="Logout"
                                onLogoutSuccess={this.signOut}
                            >
                            </GoogleLogout>
                            {/* <a href="#" onClick={this.signOut}>Sign out</a> */}
                            {/* <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button> */}
                        </Form>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>

        </div>
    }
}
