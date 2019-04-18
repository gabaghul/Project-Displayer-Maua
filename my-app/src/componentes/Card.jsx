import React, { Component } from 'react'
import './CardStyle.css'

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
            if(cards[i].getAttribute("value").toString() !== obj.props.key_ref.toString()){
                cards[i].style.display = "none";
            }else{
                if(window.innerWidth > 800){
                    cards[i].style.width = "70%";
                    cards[i].style.marginLeft = "15%";
                }
                cards[i].getElementsByTagName("button")[0].style.width="30%";
                cards[i].getElementsByTagName("button")[0].style.borderRadius="30%";
                cards[i].getElementsByTagName("button")[0].innerHTML = "-"
                cards[i].getElementsByTagName("p")[0].style.fontStyle = "italic"
                cards[i].getElementsByTagName("p")[0].style.fontWeight = "800";
                cards[i].getElementsByTagName("p")[1].style.display = "block";
                //document.getElementById("react").scrollIntoView({block: "start"});

            }
        }
    }
    removeFocus(obj){
        var cards = document.getElementsByClassName("card")
        for (i = 0; i < cards.length; i++) {
            if(cards[i].style.display = "none"){
                cards[i].style.display = "block";
                cards[i].style.marginLeft = "";
            }
        }
        for (i = 0; i < cards.length; i++) {
            if(cards[i].getAttribute("value").toString() === obj.props.key_ref.toString()){
                if(window.innerWidth > 800){
                    cards[i].style.width = "30%";
                    cards[i].getElementsByClassName("imgContaner")[0].style.margin="";
                    cards[i].getElementsByClassName("imgContaner")[0].style.width="";
                    cards[i].getElementsByClassName("imgContaner")[0].style.borderRadius="";
                }
                cards[i].getElementsByTagName("p")[1].style.display = "none";
                cards[i].getElementsByTagName("button")[0].style.width="90%";
                cards[i].getElementsByTagName("button")[0].style.borderRadius="20%";
                cards[i].getElementsByTagName("button")[0].innerHTML = "+"
                cards[i].getElementsByTagName("p")[0].style.fontStyle = ""
                cards[i].getElementsByTagName("p")[0].style.fontWeight = "";
            }
        }
    }

    render(){
        return(
            <div className="card" value={this.props.key_ref}>
                <img src={this.props.img} alt="foto" className="imgContaner"/> 
                <div className="container">
                    <div className="row_btn">
                        <h4>
                            <b>{this.props.name}</b>
                        </h4>
                        <button className="button" value={this.props.key_ref} onClick={() => this.controllFocus(this)}><span>+</span></button>
                    </div>
                    <p className="resumo" >{this.props.text1}</p>
                    <p className="texto">{this.props.text2}</p>
                </div>
            </div>
        )
    }
}

