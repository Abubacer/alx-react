import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

// test CourseListRow component
describe('CourseListRow component', () => {
    describe('when isHeader is true', () => {
        it('renders one cell with colspan set to 2 when textSecondCell is null', () => {
            const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header Cell" />);
            expect(wrapper.find('th')).toHaveLength(1);
            expect(wrapper.find('th').prop('colSpan')).toEqual(2);
        });

        it('renders two cells when textSecondCell is not null', () => {
            const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First Header Cell" textSecondCell="Second Header Cell" />);
            expect(wrapper.find('th')).toHaveLength(2);
        });
    });

    describe('when isHeader is false', () => {
        it('renders tow td tags within a tr tag', () => {
            const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First Data Cell" textSecondCell="Second Data Cell" />);
            expect(wrapper.find('td')).toHaveLength(2);
        });
    });
});
