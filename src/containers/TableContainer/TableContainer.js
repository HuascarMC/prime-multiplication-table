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



getPrimes(number) {
 this.state.primes = this.state.primable.getPrimes(number);
}

 render() {
  this.getPrimes(this.props.number);
  return(
  <table className="primes-table">
   <TableRowComponent primes={this.state.primes}/>
  </table>
 )
 }
}

export default TableContainer;
