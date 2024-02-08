import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
    let wrapper;

    beforeEach(() => {
        // Initialize wrapper before each test
        wrapper = shallow(<Header />);
    });

    it('renders without crashing', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    it('renders a header classname', () => {
        expect(wrapper.find('header.header').exists()).toEqual(true);
    });

    it('renders img tag', () => {
        expect(wrapper.find('header.header img')).toHaveLength(1);
    });

    it('renders h1 tag', () => {
        expect(wrapper.find('header.header h1')).toHaveLength(1);
    });
});
