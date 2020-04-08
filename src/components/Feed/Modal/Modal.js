import React from "react";
import Modal from 'react-bootstrap/Modal';

export default class InfoModal extends React.Component {
    state = {
        smShow: false
    }

    componentDidMount() {
        if(localStorage.getItem('modalClosed') != 'yes') {
            this.setState({
                smShow: true
            })
        }
    }

    handleModalClose = () => {
        localStorage.setItem('modalClosed', 'yes' );
        this.setState({
            smShow: false
        })
    }

    render() {
        return (
                <Modal
                    size="sm"
                    show={this.state.smShow}
                    onHide={this.handleModalClose}
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Movie Ranks - Guide
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <b>1.</b> Browse through a list of curated movies and discover some amazing content to watch. <br/>
                        <b>2.</b> Regarding the 'UpVote' button, once you have upvoted a movie, you have made the commitment. Gotta live with
                        that forever like with your partner ( so make a wise decision :p ). <br/>
                        <b>3.</b> Every 'UpVote' takes the movie one step closer to the rank#1.<br/>
                        <b>4.</b> Ask your peers to vote for their favorite movies here and this will generate a crowdsourced top movies list for
                        the entire cinemaholic community.<br/>
                        <b>5.</b> Based on your recommendations we will strive to add more movies to the list. <br/>
                    </Modal.Body>
                </Modal>
        )
    }
}

