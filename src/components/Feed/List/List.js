import React from "react";
import ListTuple from "../ListTuple/ListTuple"
import Spinner from 'react-bootstrap/Spinner';
import './List.scss'

export default class List extends React.Component {

    render() {
        let { list, isListLoading, handleUpvoteClick} = this.props; 
        return (
            <div>
                {
                    isListLoading ? 
                    <div className='spinnerCont'>
                        <Spinner animation="border" variant="light" />  
                    </div>
                    :
                    (
                           list.length ? 
                            list.map((item, index) => <ListTuple key={item._id} rank={index+1} item={item} handleUpvoteClick={handleUpvoteClick}/>) 
                                : 
                            <div className='noResultsCont'>Oops! No results found</div>
                    )
                }
            </div>
        )
    }
}

