import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList component', () => {
    it('renders without crashing', () => {
        shallow(<CourseList />);
    });

    /*it('renders five different row', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('CourseListRow')).toHaveLength(5);
    });*/

    describe('with values', () => {
        let listCourses;

        beforeEach(() => {
            listCourses = [
                { id: 1, name: 'ES6', credit: 60 },
                { id: 2, name: 'Webpack', credit: 20 },
                { id: 3, name: 'React', credit: 40 },
            ];
        });

        it('renders rows correctly', () => {
            const wrapper = shallow(<CourseList listCourses={listCourses} />);
            const row = wrapper.find('CourseListRow');
            expect(row).toHaveLength(5);
            expect(row.at(0).prop('textFirstCell')).toEqual('Available courses');
            expect(row.at(0).prop('isHeader')).toEqual(true);
            expect(row.at(1).prop('textFirstCell')).toEqual('Course name');
            expect(row.at(1).prop('textSecondCell')).toEqual('Credit');
            expect(row.at(1).prop('isHeader')).toEqual(true);
            expect(row.at(2).prop('textFirstCell')).toEqual('ES6');
            expect(row.at(2).prop('textSecondCell')).toEqual(60);
            expect(row.at(2).prop('isHeader')).toEqual(false);
            expect(row.at(3).prop('textFirstCell')).toEqual('Webpack');
            expect(row.at(3).prop('textSecondCell')).toEqual(20);
            expect(row.at(3).prop('isHeader')).toEqual(false);
            expect(row.at(4).prop('textFirstCell')).toEqual('React');
            expect(row.at(4).prop('textSecondCell')).toEqual(40);
            expect(row.at(4).prop('isHeader')).toEqual(false);
        });
    });

    describe('without values', () => {
        let listCourses;

        beforeEach(() => {
            listCourses = [];
        });

        it('renders empty message', () => {
            const wrapper = shallow(<CourseList listCourses={listCourses} />);
            const row = wrapper.find('CourseListRow');
            expect(row).toHaveLength(3);
            expect(row.at(0).prop('textFirstCell')).toEqual('Available courses');
            expect(row.at(0).prop('isHeader')).toEqual(true);
            expect(row.at(1).prop('textFirstCell')).toEqual('Course name');
            expect(row.at(1).prop('textSecondCell')).toEqual('Credit');
            expect(row.at(1).prop('isHeader')).toEqual(true);
            expect(row.at(2).prop('textFirstCell')).toEqual('No course available yet');
            expect(row.at(2).prop('textSecondCell')).toEqual(null);
            expect(row.at(2).prop('isHeader')).toEqual(false);
        });
    });
});
