import React from 'react';

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

  </table>
 )
 }
}

export default TableContainer;
