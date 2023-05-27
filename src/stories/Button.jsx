import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
import { RemixIcon } from './RemixIcon';


/**
 * Primary UI component for user interaction. Comes in two flavors, and can have an optional but highly recommended icon.
 */
export const Button = ({ primary, label, icon, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', mode].join(' ')}>
      {icon ? <RemixIcon {...props} /> : null}
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
    /**
   * Does it have an icon?
   */
  icon: PropTypes.bool,
  /**
   * Text of the Button
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  icon:false,
  onClick: undefined,
};
