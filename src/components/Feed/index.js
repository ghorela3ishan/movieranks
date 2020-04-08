import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchList, voteMovie } from "./../../services/Feed/actions";
import List from "./List/List";
import "./index.scss";
import { isAuthenticated } from "../../services/authService";
import Topbar from "./Topbar/Topbar";

class Feed extends React.Component {
    state = {
        list: [],
        searchStr: false
    }
    
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
    
    handleSearch = (searchStr) => {
        if(searchStr){
            let matchList = this.props.list.filter(function(item){
                console.log(item.name.toLowerCase().indexOf(searchStr.toLowerCase()) != -1)
                return item.name.toLowerCase().indexOf(searchStr.toLowerCase()) != -1;
            })
            this.setState({
                list: matchList,
                searchStr: true
            })
            return;
        } 
        this.setState({
            list: [],
            searchStr: false
        })
    }

    render() {
        let {list, isListLoading } = this.props; 
        let stateList  = this.state.list;
        let { searchStr } = this.state

        return (
            <div>
                <Topbar onSearchInput={this.handleSearch}/>
                <List list={searchStr ? stateList : list} isListLoading={isListLoading} handleUpvoteClick={this.handleUpvoteClick}/>
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
