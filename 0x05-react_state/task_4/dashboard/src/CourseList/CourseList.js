import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

function CourseList({ listCourses }) {
    return (
        <table id='CourseList' className={css(courseListStyles.CourseList)}>
            <thead>
                <CourseListRow textFirstCell='Available courses' isHeader={true} />
                <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true} />
            </thead>
            <tbody>
                {listCourses.length === 0 ? (
                    <CourseListRow textFirstCell='No course available yet'
                    isHeader={false}
                    />
                    ) : (
                        listCourses.map(course => (
                            <CourseListRow
                            key={course.id}
                            textFirstCell={course.name}
                            textSecondCell={course.credit}
                            isHeader={false}
                            />
                        ))
                )}
            </tbody>
        </table>
    )
}

CourseList.defaultProps = {
    listCourses: [],
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

const courseListStyles = StyleSheet.create({
    CourseList: {
        display: "table",
        width: "90%",
        borderCollapse: "collapse",
		margin: "1rem auto 0 auto",
        padding: "0.5rem",
        border: "2px solid #A9A9A9",
    }
});

export default CourseList;
