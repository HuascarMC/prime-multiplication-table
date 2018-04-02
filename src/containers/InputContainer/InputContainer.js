import React from 'react';

class InputContainer extends React.Component {
 constructor(props) {
  super(props);

  this.state = {
   number: 0,
  }
}

 render() {
  return(
   <form className="get-number-form">
    <p className="display-input-text"></p>
    <input className="get-number-input"></input>
   </form>
  )}
 }

export default InputContainer;
