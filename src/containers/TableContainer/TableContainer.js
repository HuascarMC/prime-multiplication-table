import React from 'react';
import TableRowComponent from '../../components/TableRowComponent/TableRowComponent.js'
var Primable = require('../../tools/primable/Primable.js');

class TableContainer extends React.Component {
 constructor(props) {
  super(props);

  this.state = ({
   primes: [],
   primable: new Primable,
   uniqueKey: 0,
  })
}

generateNewKey() {
 this.state.uniqueKey += 1;
}


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
