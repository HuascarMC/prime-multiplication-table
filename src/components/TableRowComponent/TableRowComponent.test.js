import React from 'react';
import TableRowComponent from './TableRowComponent'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
 shallow(<TableRowComponent />);
})

it('has a initial current row state empty', () => {
 wrapper = shallow(<TableRowComponent/>);
 state = wrapper.state()
 expect(state.currentRow.length).toEqual(0);
})
