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
 expect(state.primes().length).toEqual(0)
})
