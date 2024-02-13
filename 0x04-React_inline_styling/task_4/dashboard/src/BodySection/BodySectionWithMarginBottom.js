import React from 'react';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const BodySectionWithMarginBottom = ({ title, children }) => {
	return (
		<div className={css(bodySectionStyles.bodySectionWithMargin)} >
			<BodySection title={title}>{children}</BodySection>
		</div>
	);
};

BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

const bodySectionStyles = StyleSheet.create({
	bodySectionWithMargin: {
        marginBottom: "40px"
    }
});

export default BodySectionWithMarginBottom;
