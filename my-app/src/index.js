import React from 'react'
import ReactDOM from 'react-dom'
import Card from './componentes/Card'

var itens = [];

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var Http = new XMLHttpRequest();
Http.open('GET', 'http://icapi/api/cards');
Http.onload = function() {
    var json_file =JSON.parse(Http.responseText);
    console.log(Http.responseText)
    var i_count = 0;
    var counter = json_file.length;
    while(i_count < counter){
        var name = json_file[i_count]["name_card"]
        var text1 = json_file[i_count]["text1"]
        var text2 = json_file[i_count]["text2"]

        const file= <Card class="col-sm" name={name} key_ref={i_count} text2={text2} text1={text1}/>
        itens.push(file)
    i_count = 1 + i_count
    }
    ReactDOM.render(itens, document.getElementById('react'))
}
Http.send()


