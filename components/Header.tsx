import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PopUpUser from './PopUpUser';

function Header() {
  const [popUpState, setPopUpState] = React.useState('hidden');
  const clickUser = () => {
    if (popUpState === 'hidden') {
      setPopUpState('relative');
    } else {
      setPopUpState('hidden');
    }
  };

  return (
    <div className="flex w-full h-[4.7rem] items-center justify-between border-b border-gray-200 ">
      <div className="flex">
        <div className="my-3 ml-5 fill-gray-800 flex justify-center items-center cursor-pointer">
          <Link href={'/findProject'}>
            <Image src="/logo.png" width={50} height={50} alt={'logo'} />
          </Link>
        </div>

        <div className="flex items-center">
          <Link href={'/findProject'}>
            <a className="text-gray-800 mx-5 h-full flex justify-center border-2 border-transparent items-center hover:border-b-2 hover:border-b-blue-700 home">
              Find Jobs
            </a>
          </Link>

          <Link href={'/messages'}>
            <a className="text-gray-800  mx-5 h-full flex justify-center border-2 border-transparent items-center hover:border-b-2 hover:border-b-blue-700 messages">
              Messages
            </a>
          </Link>
        </div>
      </div>

      <div className="flex items-center mx-10 h-full">
        <div className=" flex w-32 justify-around items-end border-r border-r-gray-300 pr-5">
          <div className="hidden xl:block">
            <div
              className=" cursor-pointer hover:bg-blue-400 transition-all rounded-full p-1 "
              onClick={clickUser}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <PopUpUser state={popUpState} />
          </div>

          <Link href={'/notification'}>
            <div className="cursor-pointer hover:bg-blue-400 transition-all rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 "
              >
                <path
                  fillRule="evenodd"
                  d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </Link>
        </div>

        <Link href={'/postjob'}>
          <a className="mx-5 h-full flex border-2 border-transparent justify-center items-center hover:border-b-2 hover:border-b-blue-700 postjob">
            Post Project
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
