import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchList } from "./../../services/Feed/actions";
import List from "./List/List";
import "./index.scss";

class Feed extends React.Component {
    
    componentDidMount() {
        // fetch data
        this.props.fetchList();
    }

    render() {
        let {list, isListLoading } = this.props; 
        return (
            <div>
                <List list={list} isListLoading={isListLoading}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchList}, dispatch)
}
const mapStateToProps = (state) => {
    return {
        list: state.feed.list,
        isListLoading: state.feed.isListLoading
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
