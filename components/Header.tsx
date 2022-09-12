import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <div className="flex w-full h-[4.7rem] items-center justify-between border-b border-gray-200 ">
      <div className="flex">
        <div className="my-5 fill-gray-800 flex justify-center items-center cursor-pointer">
          <Link href={'/'}>
            <Image
              src="/indeed-logo.svg"
              width={145}
              height={38}
              alt={'logo'}
            />
          </Link>
        </div>

        <div className="flex items-center">
          <Link href={'/'}>
            <a className="text-gray-800 mx-5 h-full flex justify-center border-2 border-transparent items-center hover:border-b-2 hover:border-b-blue-700 ">
              Find Jobs
            </a>
          </Link>

          <Link href={'/messages'}>
            <a className="text-gray-800  mx-5 h-full flex justify-center border-2 border-transparent items-center hover:border-b-2 hover:border-b-blue-700 ">
              Messages
            </a>
          </Link>
        </div>
      </div>

      <div className="flex items-center mx-10 h-full">
        <Link href={'/signin'}>
          <a className="text-blue-900 font-semibold mx-5 h-full flex border-2 border-transparent justify-center items-center hover:border-b-2 hover:border-b-blue-700 ">
            Sign In
          </a>
        </Link>

        <Link href={'/postjob'}>
          <a className="mx-5 h-full flex border-2 border-transparent justify-center items-center hover:border-b-2 hover:border-b-blue-700 ">
            Post Project
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
