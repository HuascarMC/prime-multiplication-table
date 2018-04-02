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

appendRows(array) {
  for(var i = -1; i < array.length; i++) {
   if (i == -1) {
    array.push(0)
    var firstRow = this.generateRow(array);
    this.state.appendedRows.push(firstRow);
   } else {
    var increasedArray = this.state.primable.increaseArray(array, array[i]);
    increasedArray.unshift(array[i])
    var followingRow = this.generateRow(increasedArray);
    this.state.appendedRows.push(followingRow);
    return this.state.appendedRows;
  }
 }
}

generateRow(array) {
 const taggedArray = this.addTags(array);
 return (<tr>{taggedArray}</tr>)
}

addTags(array) {
 var result = array.map(function(value) {
  return(<td>{value}</td>)
 })
 return result
}

 render() {
  if(this.props.primes && this.props.primes != 0) {
   this.appendRows(this.props.primes)
  }
  return(
   <tbody>
    {this.state.appendedRows}
   </tbody>
 )
 }
}

export default TableRowComponent;
