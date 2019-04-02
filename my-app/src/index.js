import React from 'react'
import ReactDOM from 'react-dom'
import Card from './componentes/Card'

var itens = []

const file_1 = <Card class="col-sm" name="Projeto 1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor nunc a nibh sagittis, et."/>


itens.push(file_1)
itens.push(file_1)
itens.push(file_1)
itens.push(file_1)
itens.push(file_1)
itens.push(file_1)
itens.push(file_1)
itens.push(file_1)
itens.push(file_1)



ReactDOM.render(itens, document.getElementById('react'))