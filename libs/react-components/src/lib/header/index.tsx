import React from 'react';

import { IconBar3, IconEllipsisVertical } from '@suki-ai/react-svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="p-2 bg-white shadow-md flex justify-between fixed top-0 left-0 right-0 w-full">
      <div className="flex justify-center items-center">
        <IconBar3 />
        <Link to="/" className="ml-2">
          Suki AI
        </Link>
      </div>
      <div className="flex items-center">
        <IconEllipsisVertical />
      </div>
    </div>
  );
};
