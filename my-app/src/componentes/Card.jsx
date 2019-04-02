import React, { Component } from 'react'
import './CardStyle.css'
import imgTeste from './teste.jpg'

export default class Card extends Component {
    render(){
        return(
            <div className="card" >
                <img src={imgTeste} alt="foto" className="imgContaner"/>
                <div className="container">
                    <div className="row_btn">
                        <h4>
                            <b>{this.props.name}</b>
                        </h4>
                        <button className="button"><span>+</span></button>
                    </div>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

