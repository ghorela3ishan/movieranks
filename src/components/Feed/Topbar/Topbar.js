import React from "react";
import './Topbar.scss';
import InfoModal from '../Modal/Modal';
import Logo from '../../Logo/Logo';

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
                {/* <div className='titleName'>Movie <br/>Ranks</div> */}
                <span className='feedLogoCont'><Logo/></span>
                <input name='searchInput' className='searchBar'
                    value={this.state.searchValue} onChange={this.handleChange}
                    placeholder='Search movies'    
                />
                <InfoModal></InfoModal>
            </div>
        )
    }
}

