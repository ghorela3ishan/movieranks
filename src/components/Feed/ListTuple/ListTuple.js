import React from "react";

export default class ListTuple extends React.Component {
    render() {
        let { name, votes, isVoted } = this.props.item;
        return (
            <div style={{border: '1px solid red', margin: '10px'}}>
                Film name: {name} <br/>
                Total votes: {votes} <br/>
                {!isVoted && "+"}
            </div>
        )
    }
}

