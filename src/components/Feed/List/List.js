import React from "react";
import ListTuple from "../ListTuple/ListTuple"

export default class List extends React.Component {

    render() {
        let { list, isListLoading, handleUpvoteClick} = this.props; 
        return (
            <div>
                {
                    isListLoading ? "loading list" : 
                    (
                           list.length ? 
                            list.map((item, index) => <ListTuple rank={index+1} item={item} handleUpvoteClick={handleUpvoteClick}/>) 
                                : 
                            "some error occurred"
                    )
                }
            </div>
        )
    }
}

