import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Login component', () => {
    let wrapper;

    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
        wrapper = shallow(<Login />);
    });

    it('renders without crashing', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    it('renders a login classname', () => {
        expect(wrapper.find('div').exists()).toEqual(true);
    })

    it('renders two input tags', () => {
        expect(wrapper.find('input')).toHaveLength(2);
    });

    it('renders two label tags', () => {
        expect(wrapper.find('label')).toHaveLength(2);
    });
});
