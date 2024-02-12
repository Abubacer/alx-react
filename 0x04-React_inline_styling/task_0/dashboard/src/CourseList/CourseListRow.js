import React from 'react';
import PropTypes from 'prop-types';


const headerRowStyle = { backgroundColor: '#deb5b545' };
const rowStyle = { backgroundColor: '#f5f5f5ab' };

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    return (
        <tr style={isHeader ? headerRowStyle : rowStyle}>
            {isHeader ? ( // if isHeader is true
                textSecondCell === null ? ( // if textSecondCell is null
                    <th colSpan={2}>{textFirstCell}</th>
                ) : ( // if textSecondCell is not null, returns two th elements
                    <>
                        <th>{textFirstCell}</th>
                        <th>{textSecondCell}</th>
                    </>
                )
            ) : ( // if isHeader is false
                <>
                    <td>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
                </>
            )}
        </tr>
    );
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
