import React from "react";

export default class ListTuple extends React.Component {
    render() {
        let { name } = this.props.item;
        return (
            <div>
                {name}
            </div>
        )
    }
}

