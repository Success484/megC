import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function StarsRate() {
  return (
    <div className="flex">
      {[...Array(5)].map((star, index) => (
        <FaStar key={index} color='gold' />
      ))}
    </div>
  );
}
