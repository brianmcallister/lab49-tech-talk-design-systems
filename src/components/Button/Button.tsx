import classnames from 'classnames';
import React from 'react';

import './_button.scss';

interface Props {
  block?: boolean;
  children: React.ReactNode;
  className?: string;
  intent?: 'primary' | 'danger';
  onClick?: () => void;
  size?: 'small' | 'large';
}

/**
 * Base CSS class.
 * @private
 */
const baseClass = 'button';

/**
 * Button component.
 */
export const Button = ({ block, onClick, className, children, intent, size }: Props) => {
  const cls = classnames(baseClass, className, {
    [`${baseClass}--block`]: block,
    [`${baseClass}--size-${size}`]: size,
    [`${baseClass}--intent-${intent}`]: intent,
  });

  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
    </button>
  );
};
