import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchList, voteMovie } from "./../../services/Feed/actions";
import List from "./List/List";
import "./index.scss";
import { isAuthenticated } from "../../services/authService";

class Feed extends React.Component {
    
    componentDidMount() {
        // check for direct link access
        if(!isAuthenticated()) {
            this.props.history.push('/');
        }
        let userInfo = this.props.userInfo;
        if(userInfo) {
            this.props.fetchList({ userInfo });
        }
    }

    componentDidUpdate() {
        if(!this.props.isAuthenticated) {
            this.props.history.push('/');
        }
        if(!this.props.list.length && !this.props.isListLoading) {
            let userInfo = this.props.userInfo;
            this.props.fetchList({ userInfo });
        }
    }
    
    handleUpvoteClick = (movieId) => {
        this.props.voteMovie(movieId, this.props.userInfo.userId);
    }
    
    render() {
        let {list, isListLoading } = this.props; 
        return (
            <div>
                <List list={list} isListLoading={isListLoading} handleUpvoteClick={this.handleUpvoteClick}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchList, voteMovie }, dispatch)
}
const mapStateToProps = (state) => {
    return {
        list: state.feed.list,
        isListLoading: state.feed.isListLoading,
        userInfo: state.login.userData,
        isAuthenticated: state.login.isAuthenticated
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
