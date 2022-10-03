import React from 'react';
import Image from 'next/image';
import ChattingAvatar from './ChattingAvatar';
import ChatSideBarIcon from './ChatSideBarIcon';

function ChatSidebar() {
  return (
    <div className="flex flex-col h-full w-10/12 xl:w-1/4 mx-auto xl:mx-10">
      <ChatSideBarIcon />

      <div>
        <ChattingAvatar image="/facebook.svg" email="abcxyz12345@gmail.com" />
        <ChattingAvatar image="/facebook.svg" email="abcxyz12345@gmail.com" />
        <ChattingAvatar image="/facebook.svg" email="abcxyz12345@gmail.com" />
        <ChattingAvatar image="/facebook.svg" email="abcxyz12345@gmail.com" />
        <ChattingAvatar image="/facebook.svg" email="abcxyz12345@gmail.com" />
        <ChattingAvatar image="/facebook.svg" email="abcxyz12345@gmail.com" />
      </div>
    </div>
  );
}

export default ChatSidebar;
