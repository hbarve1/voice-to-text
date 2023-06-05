import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

const DEFAULT_BUTTON_CLASS =
  'hover:shadow-2xl text-3xl bg-secondary-500 rounded-full w-12 h-12 shadow-sm flex justify-center items-center';

export function ButtonRounded({
  url,
  children,
  className = '',
  ...props
}: {
  url: string;
  children: React.ReactNode;
  className?: string;
}) {
  if (url) {
    return (
      <Link
        className={classNames(DEFAULT_BUTTON_CLASS, className)}
        to={url}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classNames(DEFAULT_BUTTON_CLASS, className)}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
