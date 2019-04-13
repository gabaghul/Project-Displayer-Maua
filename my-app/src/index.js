import React from 'react'
import ReactDOM from 'react-dom'
import Card from './componentes/Card'

var itens = []

const texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae sem nec lacus varius iaculis et nec ipsum. Etiam porttitor lorem in leo sagittis, ut pharetra leo venenatis. Fusce dapibus tincidunt tincidunt. Quisque vitae nulla iaculis, aliquet tortor at, tristique nisl. Donec sodales ipsum vitae sodales volutpat. Sed dictum orci at dui efficitur imperdiet. Maecenas sed nibh elit. Etiam tempor pellentesque turpis sit amet dictum. Fusce auctor condimentum rutrum. Fusce ut libero ut mauris convallis elementum vitae in felis. Suspendisse vel tortor feugiat enim blandit ultricies et vitae ligula. Mauris nec imperdiet ante. Cras eu turpis nec nunc elementum consequat. Donec ullamcorper consequat feugiat. Donec rhoncus, urna in feugiat ultricies, odio libero vehicula justo, et faucibus diam tellus lobortis dui. Aliquam tristique tellus eu nibh suscipit, et luctus massa scelerisque. Proin congue vestibulum erat, ut condimentum risus rutrum sit amet. Nulla facilisi. Pellentesque dignissim, nibh a posuere cursus, massa velit hendrerit est, a viverra tellus elit nec eros. Aliquam mauris metus, scelerisque sit amet nibh id, tempus rutrum tortor. Quisque cursus suscipit tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sodales ligula enim. Ut malesuada, dolor ac ornare feugiat, nunc enim tristique est, bibendum viverra libero arcu ut felis. Nam tincidunt eleifend lorem id tempus. Integer ut justo ut augue posuere posuere sit amet non nunc.Donec auctor ullamcorper neque sed tempus. Quisque dignissim at arcu in ultrices. Aliquam suscipit ac ligula vel mattis. Sed interdum aliquam ullamcorper. Integer mollis orci pretium purus interdum gravida. Fusce ac eros vitae elit placerat bibendum non id justo. Suspendisse eu pretium libero. In sit amet sem sit amet lectus lobortis dictum. Morbi congue purus vel neque sagittis, dapibus sagittis ante euismod. Donec lacus quam, ornare at posuere non, convallis varius purus."


const file_1 = <Card class="col-sm" name="Projeto 1" key_ref="1" text2={texto} text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor nunc a nibh sagittis, et."/>
const file_2 = <Card class="col-sm" name="Projeto 2" key_ref="2" text2={texto} text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor nunc a nibh sagittis, et."/>
const file_3 = <Card class="col-sm" name="Projeto 3" key_ref="3" text2={texto} text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor nunc a nibh sagittis, et."/>
const file_4 = <Card class="col-sm" name="Projeto 4" key_ref="4" text2={texto} text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor nunc a nibh sagittis, et."/>


itens.push(file_1)
itens.push(file_2)
itens.push(file_3)
itens.push(file_4)



ReactDOM.render(itens, document.getElementById('react'))