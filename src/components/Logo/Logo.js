import React from "react";
import './Logo.scss';

export default class Logo extends React.Component{
    render() {
        return (
            <span className='logoCont'>
                <span>#</span>
                <span>movie</span>
                <span>Ranks</span>
            </span>
        )
    }
}