import React from 'react'
import ReactDOM from 'react-dom'
import Card from './componentes/Card'



function load_array(){
    var json_file = require('./file_data.json');
    var itens = [];
    var i_count = 0;
    var counter = json_file["cards"].length - 1

    while(i_count < json_file["cards"].length){
        var name = json_file["cards"][i_count]["name"]
        var text1 = json_file["cards"][i_count]["text1"]
        var text2 = json_file["cards"][i_count]["text2"]

        const file= <Card class="col-sm" name={name} key_ref={i_count} text2={text2} text1={text1}/>
        itens.push(file)
    i_count = 1 + i_count
    }
    return itens
}

if(load_array()){
    ReactDOM.render(load_array(), document.getElementById('react'))
}