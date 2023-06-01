import React from 'react';

export function UserCard({ name, age }: { name: string; age: number }) {
  return (
    <div className="p-2 bg-white m-1 rounded-md shadow-sm hover:shadow-lg flex justify-start items-start">
      <img
        src="https://via.placeholder.com/150"
        alt="patient"
        className="w-48 h-48 rounded-lg mr-2"
      />
      <div className="flex flex-col">
        <div className="text-gray-900">{name}</div>
        <div className="text-xs text-gray-800">{age}</div>
      </div>
    </div>
  );
}
