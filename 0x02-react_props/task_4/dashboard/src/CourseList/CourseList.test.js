import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList component', () => {
    it('renders without crashing', () => {
        shallow(<CourseList />);
    });

    it('renders five different row', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('CourseListRow')).toHaveLength(5);
    });
});