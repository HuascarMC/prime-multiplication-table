import React from 'react';
var ArrayChanger = require('../../tools/arraychanger/array_changer.js');

class TableRowComponent extends React.Component {
 constructor(props) {
  super(props);
// It has an appended rows state and uses arrayChanger tool.
  this.state = {
   appendedRows: [],
   arrayChanger: new ArrayChanger(),
  }
}
// This method appends the rows that will be rendered to represent the multiplication table given
// an array of primes.
appendRows(array) {
  for(var i = -1; i < array.length; i++) {
   if (i == -1) {
    var indexArray = array.slice();
    indexArray.unshift("Good");
    var firstRow = this.generateRow(indexArray, "indexCells");
    this.state.appendedRows.push(firstRow);
   } else {
    var increasedArray = this.state.arrayChanger.increaseArray(array, array[i]);
    increasedArray.unshift(<td className="indexCells">{array[i]}</td>)
    var followingRow = this.generateRow(increasedArray, "multipliedCells");
    this.state.appendedRows.push(followingRow);
  }
 }
}
// This method add the <tr></tr> HTML tags to each row.
generateRow(array, cssClass) {
 const taggedArray = this.addTags(array, cssClass);
 return (<tr>{taggedArray}</tr>)
}
// This method adds the <td></td> to each value in array.
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
