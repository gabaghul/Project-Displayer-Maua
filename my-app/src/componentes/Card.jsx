import React, { Component } from 'react'
import './CardStyle.css'
import imgTeste from './teste.jpg'
var status_value = 0;
var i = 0;
export default class Card extends Component {
    controllFocus(obj){
        if((status_value %2) === 0){
            this.setFocus(obj);
        }else{
            this.removeFocus(obj);
        }
        status_value = status_value + 1;
    }

    setFocus(obj){
        var cards = document.getElementsByClassName("card")
        for (i = 0; i < cards.length; i++) {
            if(cards[i].getAttribute("value") !== obj.props.key_ref){
                cards[i].style.display = "none";
            }else{
                if(window.innerWidth > 800){
                    cards[i].style.width = "100%";
                }
                cards[i].getElementsByTagName("button")[0].style.width="30%";
                cards[i].getElementsByTagName("button")[0].style.borderRadius="30%";
                cards[i].getElementsByTagName("button")[0].innerHTML = "-"
                cards[i].getElementsByTagName("button")[0].scrollIntoView();
            }
        }
    }
    removeFocus(obj){
        var cards = document.getElementsByClassName("card")
        for (i = 0; i < cards.length; i++) {
            if(cards[i].style.display = "none"){
                cards[i].style.display = "block";
            }
        }
        for (i = 0; i < cards.length; i++) {
            if(cards[i].getAttribute("value") === obj.props.key_ref){
                if(window.innerWidth > 800){
                    cards[i].style.width = "30%";
                    cards[i].getElementsByClassName("imgContaner")[0].style.margin="";
                    cards[i].getElementsByClassName("imgContaner")[0].style.width="";
                    cards[i].getElementsByClassName("imgContaner")[0].style.borderRadius="";
                }
                cards[i].getElementsByTagName("button")[0].style.width="90%";
                cards[i].getElementsByTagName("button")[0].style.borderRadius="20%";
                cards[i].getElementsByTagName("button")[0].innerHTML = "+"
            }
        }
    }

    render(){
        return(
            <div className="card" value={this.props.key_ref}>
                <img src={imgTeste} alt="foto" className="imgContaner"/> 
                <div className="container">
                    <div className="row_btn">
                        <h4>
                            <b>{this.props.name}</b>
                        </h4>
                        <button className="button" value={this.props.key_ref} onClick={() => this.controllFocus(this)}><span>+</span></button>
                    </div>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

