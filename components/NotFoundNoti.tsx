import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function NotFoundNoti() {
  return (
    <div className="w-1/2 bg-white h-full flex flex-col justify-start items-center mt-20">
      <div className="w-52 h-52 relative pt-20">
        {' '}
        <Image
          src={'/img/notification.png'}
          alt="not found"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <h1 className="text-3xl font-bold">
        Nothing right now. Check back later!
      </h1>
      <h1 className="text-lg w-6/12 text-center my-5">
        This is where we’ll notify you about your job applications and other
        useful information to help you with your job search.
      </h1>
      <Link href={'findProject'}>
        <button className="w-72 h-14 bg-blue-800 font-bold text-white rounded-lg p-5 hover:bg-blue-900 transition-all flex justify-center items-center self-center hover:shadow-md my-3">
          Find a Project
        </button>
      </Link>
    </div>
  );
}

export default NotFoundNoti;
