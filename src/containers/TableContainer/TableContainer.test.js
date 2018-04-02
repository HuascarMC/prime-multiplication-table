import React from 'react';
import TableContainer from './TableContainer'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
 shallow(<TableContainer />);
})

it('has a primes array state', () => {
 const wrapper = shallow(<TableContainer />);
 const state = wrapper.state();
 expect(state.primes.length).toEqual(0)
})

it('should render table tags', () => {
 const wrapper = shallow(<TableContainer />);
 const table = wrapper.find('.primes-table');
 expect(table.exists()).toEqual(true);
})

it('should match the snapshot', () => {
 const component = renderer.create(
  <TableContainer />
 );
 let tree = component.toJSON();
 expect(tree).toMatchSnapshot();
})


it('should be able to use primable class', () => {
 const wrapper = shallow(<TableContainer />);
 const primable = wrapper.state().primable

 expect(primable).toBeTruthy();
})

it('should be able to use primable getPrimes method', () => {
 const wrapper = shallow(<TableContainer />);
 const primable = wrapper.state().primable

 const result = primable.getPrimes(10)
 expect(result.length).toEqual(5);
})

it('should be able to use primable increaseArray method', () => {
 const wrapper = shallow(<TableContainer />);
 const primable = wrapper.state().primable

 const primesArray = primable.getPrimes(10);
 const increasedArray = primable.increaseArray(primesArray, 3);
 const result = [6, 9, 15, 21, 27];
 expect(increasedArray).toEqual(result);
})

it('should be able to use primable is Prime method', () => {
 const wrapper = shallow(<TableContainer />);
 const primable = wrapper.state().primable

 const result = primable.isPrime(7);
 expect(result).toEqual(true);
})
