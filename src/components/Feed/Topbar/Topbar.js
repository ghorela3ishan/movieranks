import React from "react";
import './Topbar.scss';

export default class Topbar extends React.Component {
    state = {
        searchInput: ''
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        }) 
        this.props.onSearchInput(value);
    }

    render() {
        return (
            <div className='topbarCont'>
                <div className='titleName'>Movie <br/>Ranks</div>
                <input name='searchInput' className='searchBar'
                    value={this.state.searchValue} onChange={this.handleChange}
                    placeholder='Search films'    
                />
            </div>
        )
    }
}

