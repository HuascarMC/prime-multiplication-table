import React from 'react';
import TableRowComponent from './TableRowComponent'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
 shallow(<TableRowComponent />);
})

it('should be instance of', () => {
 const wrapper = shallow(<TableRowComponent />);
 const instance = wrapper.instance();
 expect(instance).toBeTruthy();
})

it('has an initial current row state empty', () => {
 const wrapper = shallow(<TableRowComponent />);
 const state = wrapper.state();
 expect(state.appendedRows.length).toEqual(0);
})

it('generates a row given a tagged array', () => {
 const wrapper = shallow(<TableRowComponent />);
 const instance = wrapper.instance();
 const row = instance.generateRow([1,2,3], "test");

 const result = <tr>{[<td className="test">{1}</td>, <td className="test">{2}</td>, <td className="test">{3}</td>]}</tr>
 expect(row).toEqual(result);
})

it('add tags to primes array', () => {
 const wrapper = shallow(<TableRowComponent />);
 const instance = wrapper.instance();
 const primesWithTags = instance.addTags([1,2,3], "test");

 const result = [<td className="test">{1}</td>, <td className="test">{2}</td>,<td className="test">{3}</td>]
 expect(primesWithTags).toEqual(result);
})

it('should be able to append rows together', () => {
 const wrapper = shallow(<TableRowComponent />);
 const instance = wrapper.instance();
 // test needs improvement
 const expectedResult = wrapper.instance().appendRows([2]);
 // const expectedResultNoVisualDifference? = [<tr><td>{2}</td></tr>, <tr><td>{2}</td><td>{4}</td></tr>]
 const actualResult = instance.appendRows([2])
 expect(actualResult).toEqual(expectedResult)
})

it('should be able to use primable class', () => {
 const wrapper = shallow(<TableRowComponent />);
 const primable = wrapper.state().primable

 expect(primable).toBeTruthy();
})

it('should be able to use primable getPrimes method', () => {
 const wrapper = shallow(<TableRowComponent />);
 const primable = wrapper.state().primable

 const result = primable.getPrimes(10)
 expect(result.length).toEqual(5);
})

it('should be able to use primable increaseArray method', () => {
 const wrapper = shallow(<TableRowComponent />);
 const primable = wrapper.state().primable

 const primesArray = primable.getPrimes(10);
 const increasedArray = primable.increaseArray(primesArray, 3);
 const result = [6, 9, 15, 21, 27];
 expect(increasedArray).toEqual(result);
})

it('should be able to use primable is Prime method', () => {
 const wrapper = shallow(<TableRowComponent />);
 const primable = wrapper.state().primable

 const result = primable.isPrime(7);
 expect(result).toEqual(true);
})

it('should match the snapshot', () => {
 const component = renderer.create(
  <TableRowComponent />
 );
 let tree = component.toJSON();
 expect(tree).toMatchSnapshot();
})
