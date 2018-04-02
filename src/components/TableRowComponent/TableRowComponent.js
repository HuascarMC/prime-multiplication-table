import React from 'react';
var Primable = require('../../tools/primable/Primable.js');

class TableRowComponent extends React.Component {
 constructor(props) {
  super(props);

  this.state = {
   appendedRows: [],
   primable: new Primable(),
  }
}

generateRow(array) {
 const taggedArray = this.addTags(array);
 return <tr>{taggedArray}</tr>
}

addTags(array) {
 var result = array.map(function(value) {
  return(<td>{value}</td>)
 })
 return result
}

 render() {
  return(
  <div></div>
 )
 }
}

export default TableRowComponent;
