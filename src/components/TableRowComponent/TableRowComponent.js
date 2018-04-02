import React from 'react';

class TableRowComponent extends React.Component {
 constructor(props) {
  super(props);

  this.state = {
   currentRow: [],
  }
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
