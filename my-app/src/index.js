import React from 'react'
import ReactDOM from 'react-dom'
import Card from './componentes/Card'

var itens = []

const file_1 = <Card class="col-sm" name="Projeto 1" key_ref="1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor nunc a nibh sagittis, et."/>
const file_2 = <Card class="col-sm" name="Projeto 2" key_ref="2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor nunc a nibh sagittis, et."/>
const file_3 = <Card class="col-sm" name="Projeto 3" key_ref="3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor nunc a nibh sagittis, et."/>
const file_4 = <Card class="col-sm" name="Projeto 4" key_ref="4" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor nunc a nibh sagittis, et."/>


itens.push(file_1)
itens.push(file_2)
itens.push(file_3)
itens.push(file_4)



ReactDOM.render(itens, document.getElementById('react'))