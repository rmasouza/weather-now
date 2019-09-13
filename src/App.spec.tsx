import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
    it('should render correctly with "Hello World!"', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.text()).toBe('Hello World!')
    });
});