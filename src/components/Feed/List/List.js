import React from "react";
import ListTuple from "../ListTuple/ListTuple"

export default class List extends React.Component {

    render() {
        let { list, isListLoading } = this.props; 
        return (
            <div>
                {
                    isListLoading ? "loading list" : 
                    (
                           list.length ? 
                            list.map((item, index) => <ListTuple item={item} onUpVoteClick={""}/>) 
                                : 
                            "some error occurred"
                    )
                }
            </div>
        )
    }
}

