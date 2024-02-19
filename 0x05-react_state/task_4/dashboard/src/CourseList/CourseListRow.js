import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    const [checked, setChecked] = useState(false);

    const handleCheckedchange = () => {
        setChecked(!checked);
    };
    
    return (
        <tr className={css(isHeader ? headerRowStyles.rowBackground : defaultRowStyles.rowBackground, checked ? defaultRowStyles.rowChecked : '')}>
            {isHeader ? ( // if isHeader is true
                textSecondCell === null ? ( // if textSecondCell is null
                    <th className={css(defaultRowStyles.th)} colSpan={2}>{textFirstCell}</th>
                ) : ( // if textSecondCell is not null, returns two th elements
                    <>
                        <th className={css(defaultRowStyles.noth)}>{textFirstCell}</th>
                        <th className={css(defaultRowStyles.noth)}>{textSecondCell}</th>
                    </>
                )
            ) : ( // if isHeader is false
                <>
                    <td><input type="checkbox" onChange={handleCheckedchange}/>{textFirstCell}</td>
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

const defaultRowStyles = StyleSheet.create({
    rowBackground: {
        backgroundColor: "#f5f5f5ab",
    },

    th: {
		textAlign: "center",
		padding: "0.5rem"
	},
    noth: {
        textAlign: "left",
        borderTop: "2px solid #A9A9A9",
		borderBottom: "2px solid #A9A9A9",
    },
    rowChecked: {
        backgroundColor: "#e6e4e4",
    }
});

const headerRowStyles = StyleSheet.create({
    rowBackground: {
        backgroundColor: "#deb5b545",
    }
});

export default CourseListRow;
