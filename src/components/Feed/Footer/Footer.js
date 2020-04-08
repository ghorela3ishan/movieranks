import React from "react";
import './Footer.scss';

export default class Footer extends React.Component {
    render() {
        return (
            <div className='footerCont'>
                    <div>&copy; 2020 MovieRanks</div>
                    <span>Team: </span>
                        <a className='profLink' target="_blank" href="https://www.linkedin.com/in/ghorela3ishan/">Ishan Ghorela</a>
                        <a className='profLink' target="_blank" href="https://www.linkedin.com/in/chirag-a-792936133/">Chirag Arora</a>
            </div>
        )
    }
}

