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

it('it should display input default state', () => {
 const wrapper = shallow(<InputContainer />);
 const displayText = wrapper.find('.display-input-text')
 expect(displayText.text()).toEqual("0");
})

it('has an initial number state of zero', () => {
 const wrapper = shallow(<InputContainer />);
 const state = wrapper.state();
 expect(state.number).toEqual(0);
})

it('DEPRECATED: should update state on input change', () => {
 const wrapper = shallow(<InputContainer />);
 const input = wrapper.find('.get-number-input');

 wrapper.find('.get-number-input').simulate('submit',  { preventDefault: () => {}, target: {value: 1} })

 expect(wrapper.state().number).toEqual(0)
})

it('DEPRECATED: should update display user input', () => {
 const wrapper = shallow(<InputContainer />);
 const input = wrapper.find('.get-number-input');

 input.simulate('submit', { preventDefault: () => {}, target: {value: '20'} })

 expect(wrapper.find('.display-input-text').text()).toEqual("0")
})

it('should match the snapshot', () => {
 const component = renderer.create(
  <InputContainer />
 );
 let tree = component.toJSON();
 expect(tree).toMatchSnapshot();
})
