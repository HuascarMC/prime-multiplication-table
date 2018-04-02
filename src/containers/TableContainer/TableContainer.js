import React from 'react';
import TableRowComponent from '../../components/TableRowComponent/TableRowComponent.js'

class TableContainer extends React.Component {
 constructor(props) {
  super(props);

  this.state = ({
   primes: [],
  })
}

 render() {
  return(
  <table className="primes-table">
   <TableRowComponent primes={this.state.primes}/>
  </table>
 )
 }
}

export default TableContainer;
