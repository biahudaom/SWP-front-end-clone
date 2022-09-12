import React from 'react';

type MainProps = {
  children: React.ReactNode;
};

function Main({ children }: MainProps) {
  return <div className="w-full h-full">{children}</div>;
}

export default Main;
