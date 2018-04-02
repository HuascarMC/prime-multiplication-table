import React from 'react';
import TableRowComponent from './TableRowComponent'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
 shallow(<TableRowComponent />);
})

it('has an initial current row state empty', () => {
 const wrapper = shallow(<TableRowComponent />);
 const state = wrapper.state();
 expect(state.currentRow.length).toEqual(0);
})

it('generates a row given a tagged array', () => {
 const wrapper = shallow(<TableRowComponent />);
 const instance = wrapper.instance();
 const row = instance.generateRow([1,2,3]);

 const result = <tr>{[<td>{1}</td>, <td>{2}</td>, <td>{3}</td>]}</tr>
 expect(row).toEqual(result);
})

it('add tags to primes array', () => {
 const wrapper = shallow(<TableRowComponent />);
 const instance = wrapper.instance();
 const primesWithTags = instance.addTags([1,2,3]);

 const result = [<td>{1}</td>, <td>{2}</td>,<td>{3}</td>]
 expect(primesWithTags).toEqual(result);
})
