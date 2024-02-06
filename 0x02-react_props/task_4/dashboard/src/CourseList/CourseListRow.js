import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
    return (
        <tr>
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

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string,
};

export default CourseListRow;