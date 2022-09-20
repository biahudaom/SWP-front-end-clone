import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NotFoundNoti from '../components/NotFoundNoti';

function notification() {
  return (
    <div className="h-screen bg-gray-50 w-full flex justify-center items-center">
      <NotFoundNoti />
    </div>
  );
}

export default notification;
