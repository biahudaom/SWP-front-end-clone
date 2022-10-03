import React from 'react';
import Image from 'next/image';

interface ChattingAvatarProps {
  image: string;
  email: string;
}

function ChattingAvatar({ image, email }: ChattingAvatarProps) {
  return (
    <div className="flex justify-start items-center border border-gray-400 p-3 rounded-lg hover:bg-blue-100 transition-all my-3 cursor-pointer ">
      <Image src={image} width={25} height={25} alt="avatar" />
      <div className="ml-5">{email}</div>
    </div>
  );
}

export default ChattingAvatar;
