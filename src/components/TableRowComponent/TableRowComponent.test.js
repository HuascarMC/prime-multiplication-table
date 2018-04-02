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

it('generates a row given an array', () => {
 const wrapper = shallow(<TableRowComponent />);
 const row = wrapper.generateRow([1,2,3]);

 const result = <tr><td>1</td><td>2</td><td>3</td></tr>
 expect(row).toEqual(result)
})
