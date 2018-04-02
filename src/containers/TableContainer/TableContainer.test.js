import React from 'react';
import TableContainer from './TableContainer'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
 shallow(<TableContainer />);
})
