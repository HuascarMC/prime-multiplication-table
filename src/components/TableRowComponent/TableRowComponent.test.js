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
