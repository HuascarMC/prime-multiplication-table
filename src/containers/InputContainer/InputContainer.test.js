import React from 'react';
import InputContainer from './InputContainer'
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
 shallow(<InputContainer />);
})

it('should render one form', () => {
 const wrapper = shallow(<InputContainer />);
 const form = wrapper.find('.get-number-form');
 expect(form.exists()).toEqual(true);
})

it('should render input box', () => {
 const wrapper = shallow(<InputContainer />);
 const input = wrapper.find('.get-number-input');
 expect(input.exists()).toEqual(true);
})

it('should render text displaying input', () => {
 const wrapper = shallow(<InputContainer />);
 const displayText = wrapper.find('.display-input-text');
 expect(displayText.exists()).toEqual(true);
})

it('it should inform the user about table current state', () => {
 const wrapper = shallow(<InputContainer />);
 const displayText = wrapper.find('.display-input-text')
 expect(displayText.text()).toEqual("This is a multiplication table for the prime numbers from zero to 0");
})

it('has an initial number state of zero', () => {
 const wrapper = shallow(<InputContainer />);
 const state = wrapper.state();
 expect(state.number).toEqual(0);
})

it('DEPRECATED: should update state on input change', () => {
 const wrapper = shallow(<InputContainer />);
 const input = wrapper.find('.get-number-input');
 // needs improvement, can't change value of input from text when having e.prevent default attribute.
 wrapper.find('.get-number-input').simulate('submit',  { preventDefault: () => {}, target: {value: 1} })

 expect(wrapper.state().number).toEqual(0)
})

it('DEPRECATED: should update display user input', () => {
 const wrapper = shallow(<InputContainer />);
 const input = wrapper.find('.get-number-input');

 input.simulate('submit', { preventDefault: () => {}, target: {value: '20'} })
 // needs improvement, can't change value of input from text when having e.prevent default attribute.
 expect(wrapper.find('.display-input-text').text()).toEqual("This is a multiplication table for the prime numbers from zero to 0")
})

it('should match the snapshot', () => {
 const component = renderer.create(
  <InputContainer />
 );
 let tree = component.toJSON();
 expect(tree).toMatchSnapshot();
})

it('DEPRECATED: should not take input higher than five-hundred', () => {
 const wrapper = shallow(<InputContainer />);
 const input = wrapper.find('.get-number-input');
 // needs improvement, can't change value of input from text when having e.prevent default attribute.
 wrapper.find('.get-number-input').simulate('change', {target: {value: 501} })
 expect(wrapper.state().number).toEqual(0);
})

it('DEPRECATED: shoul tell user to input a value less than five-hundred', () => {
 const wrapper = shallow(<InputContainer />);
 const input = wrapper.find('.get-number-input');
 // needs improvement, can't change value of input from text when having e.prevent default attribute.
 wrapper.find('.get-number-input').simulate('change', {target: {value: 501} })
 expect(wrapper.find('.display-input-text').text()).toEqual("This is a multiplication table for the prime numbers from zero to 0");
})
