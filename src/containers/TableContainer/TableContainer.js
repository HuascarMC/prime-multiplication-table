import React from 'react';
import TableRowComponent from '../../components/TableRowComponent/TableRowComponent.js'
var Primable = require('../../tools/primable/Primable.js');

class TableContainer extends React.Component {
 constructor(props) {
  super(props);
// Prior to rendering it gets the user input through props and uses the primable class to get primes.
// It then passes the primes array as props to child row component.
// Note: each time it renders a table it adds a unique key to render each table from scratch on display.
  this.state = ({
   primes: [],
   primable: new Primable,
   uniqueKey: 0,
  })
}
// Generates new key.
generateNewKey() {
 this.state.uniqueKey += 1;
}

// Gets all primes numbers from zero to the number requested by user. It uses primable tool.
getPrimes(number) {
 this.state.primes = this.state.primable.getPrimes(number);
}

 render() {
  this.getPrimes(this.props.number);
   this.generateNewKey();
  return(
  <table className="primes-table" key={this.state.uniqueKey}>
   <TableRowComponent primes={this.state.primes}/>
  </table>
 )
 }
}

export default TableContainer;
