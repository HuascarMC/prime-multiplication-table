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

it('should be able to use arrayChanger class', () => {
 const wrapper = shallow(<TableRowComponent />);
 const arrayChanger = wrapper.state().arrayChanger

 expect(arrayChanger).toBeTruthy();
})

it('should be able to use arrayChanger increaseArray method', () => {
 const wrapper = shallow(<TableRowComponent />);
 const arrayChanger = wrapper.state().arrayChanger

 const primesArray = [2, 3, 5, 7, 9];
 const increasedArray = arrayChanger.increaseArray(primesArray, 3);
 const result = [6, 9, 15, 21, 27];
 expect(increasedArray).toEqual(result);
})

it('should match the snapshot', () => {
 const component = renderer.create(
  <TableRowComponent />
 );
 let tree = component.toJSON();
 expect(tree).toMatchSnapshot();
})
