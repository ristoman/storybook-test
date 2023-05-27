import React from 'react';
import PropTypes from 'prop-types';
import 'remixicon/fonts/remixicon.css';

export const RemixIcon = ({ name, iconStyle, size, ...props }) => (
        <i
        className={[`ri-${name}-${iconStyle}`, `ri-${size}`].join(' ')}
        {...props}
        >
        </i>
);

RemixIcon.propTypes = {
    /**
     * Refer to remixicon.com for valid names. There's a LOT of icon names. The site documents all variants but visual changes are associated to other props, so make sure you only enter the name.
     **/
    name: PropTypes.string.isRequired,
    /** 
     * Should the icon be outlined or filled in? 
     **/
    iconStyle: PropTypes.oneOf(['line', 'fill']),
    /** 
     * Sizes are relative to font size in the element where the icon is applied. 
     **/
    size: PropTypes.oneOf([
        'fw', 
        'xxs',
        'xs',
        'lg',
        'xl',
        'sm',
        '1x',
        '2x',
        '3x',
        '4x',
        '5x',
        '6x',
        '7x',
        '8x',
        '9x',
        '10x',
    ]),
};

RemixIcon.defaultProps = {
    name: 'arrow-left-up',
    iconStyle: 'fill',
    size: '1x',
};

