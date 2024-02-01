import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// test that App renders without crashing
// test that App renders a div with the class App-header
// test that App renders a div with the class App-body
// test that App renders a div with the class App-footer
describe('App component', () => {
    it('renders without crashing', () => {
        shallow(<App />);
    });

    it('renders a div with classname App-header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-header')).toHaveLength(1);
    });

    it('renders a div with classname App-body', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-body')).toHaveLength(1);
    });

    it('renders a div with classname App-footer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-footer')).toHaveLength(1);
    });
});