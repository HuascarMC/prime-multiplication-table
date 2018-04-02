import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

xit('should render without crashing', () => {
 shallow(<InputContainer />);
})

xit('should render render one form', () => {
 const wrapper = shallow(<InputContainer />);
 expect(wrapper.find('.get-number-form').to.have.length(1));
})
