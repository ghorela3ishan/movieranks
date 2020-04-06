import React from "react";

export default class ListTuple extends React.Component {
    state = {
        upVote: true
    }

    render() {
        let { _id, name, votes, isUpVoted } = this.props.item;
        let { handleUpvoteClick } = this.props;
        return (
            <div style={{border: '1px solid red', margin: '10px'}}>
                Film name: {name} <br/>
                Total votes: {votes} <br/>
                {
                    !isUpVoted && 
                    <input type="button" value="Upvote" onClick={() => handleUpvoteClick(_id)} />
                }
            </div>
        )
    }
}

