import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login component', () => {
    let wrapper;

    beforeEach(() => {
        // Initialize wrapper before each test
        wrapper = shallow(<Login />);
    });

    it('renders without crashing', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    it('renders a login classname', () => {
        expect(wrapper.find('div.login').exists()).toEqual(true);
    })

    it('renders two input tags', () => {
        expect(wrapper.find('div.login input')).toHaveLength(2);
    });

    it('renders two label tags', () => {
        expect(wrapper.find('div.login label')).toHaveLength(2);
    });
});
