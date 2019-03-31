import React, { Component } from 'react'
import './CardStyle.css'

export default class Card extends Component {
    render(){
        return(
            <div className="card">
                <img src="./teste.png" alt="foto" className="imgContaner"/>
                <div className="container">
                    <h4>
                        <b>{this.props.name}</b>
                    </h4>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

