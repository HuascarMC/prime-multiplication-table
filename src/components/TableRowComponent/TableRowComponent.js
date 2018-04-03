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
    var indexArray = array.slice();
    indexArray.unshift("Good");
    var firstRow = this.generateRow(indexArray, "indexCells");
    this.state.appendedRows.push(firstRow);
   } else {
    var increasedArray = this.state.primable.increaseArray(array, array[i]);
    increasedArray.unshift(array[i])
    var followingRow = this.generateRow(increasedArray,"multipliedCells");
    this.state.appendedRows.push(followingRow);
  }
 }
}

generateRow(array, cssClass) {
 const taggedArray = this.addTags(array, cssClass);
 return (<tr>{taggedArray}</tr>)
}

addTags(array, cssClass) {
 var result = array.map(function(value) {
  return(<td className={cssClass}>{value}</td>)
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
