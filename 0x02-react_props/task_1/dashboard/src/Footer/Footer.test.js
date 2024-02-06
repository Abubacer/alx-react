import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
    let wrapper;

    beforeEach(() => {
        // Initialize wrapper before each test
        wrapper = shallow(<Footer />);
    });

    it('renders without crashing', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    it('renders a footer classname', () => {
        expect(wrapper.find('footer.footer').exists()).toEqual(true);
    });

    it('renders the text “Copyright”', () => {
        expect(wrapper.find('footer.footer p').exists()).toEqual(true);
        expect(wrapper.find('footer.footer p').text()).toContain('Copyright');
    });
});