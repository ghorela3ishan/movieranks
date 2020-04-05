import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchList } from "./../../services/Feed/actions";
import List from "./List/List";
import "./index.scss";
import isAuthenticated from "../../services/authService";

class Feed extends React.Component {
    
    componentDidMount() {
        if(!isAuthenticated()) {
            this.props.history.push('/');
        }
        let userInfo = this.props.userInfo;
        this.props.fetchList({ userInfo });
    }

    componentDidUpdate() {
        if(!this.props.list.length) {
            let userInfo = this.props.userInfo;
            this.props.fetchList({ userInfo });
        }
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
        isListLoading: state.feed.isListLoading,
        userInfo: state.login.userData
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
