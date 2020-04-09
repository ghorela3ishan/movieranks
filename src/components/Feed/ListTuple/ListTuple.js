import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import "./ListTuple.scss";

export default class ListTuple extends React.Component {
    state = {
        upVote: true,
        showLoader: false
    }

    onUpvoteClick = (_id) => {
        this.props.handleUpvoteClick(_id);
        this.setState({
            showLoader: true
        })
    }

    render() {
        let { _id, name, votes, isUpVoted } = this.props.item;
        let { handleUpvoteClick, rank } = this.props;
        let { showLoader } = this.state;

        return (
            <div className='tupleCont'>
                <div className='nameSec'>
                    <div className='nameCont'>{name}</div>
                    {
                        isUpVoted ? <i className='upVotedIcon'>&#9829;</i> :
                        ( showLoader ? 
                            <Spinner animation="grow" variant="danger" />  
                            :
                            <input type="button" value="Upvote" className='upVoteBtn' onClick={() => this.onUpvoteClick(_id)} />
                        )  
                        
                    }
                </div>
                <div className='voteSec'>
                    <div className='rankCont'>rank#{rank}</div>    
                    <div className='totalVotesCont'>total votes#{votes}</div> 
                </div>
            </div>
        )
    }
}

