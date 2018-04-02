import React from 'react';

class TableRowComponent extends React.Component {
 constructor(props) {
  super(props);

  this.state = {
   currentRow: [],
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
