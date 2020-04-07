import React from "react";
import "./ListTuple.scss";

export default class ListTuple extends React.Component {
    state = {
        upVote: true
    }

    render() {
        let { _id, name, votes, isUpVoted } = this.props.item;
        let { handleUpvoteClick, rank } = this.props;
        return (
            <div className='tupleCont'>
                <div className='nameSec'>
                    <div className='nameCont'>{name}</div>
                    {
                        isUpVoted ? <i className='upVotedIcon'>&#9829;</i> :  
                        <input type="button" value="Upvote" className='upVoteBtn' onClick={() => handleUpvoteClick(_id)} />
                        
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

