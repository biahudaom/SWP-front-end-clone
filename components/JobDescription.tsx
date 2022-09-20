import React from 'react';

interface jobFullProps {
  desc: string;
}

function JobDescription({ desc }: jobFullProps) {
  return (
    <div className="w-1/2 h-full pl-10 border-l border-l-gray-300">
      <h1 className="font-bold text-2xl mb-5">Project Description</h1>
      {desc}
    </div>
  );
}

export default JobDescription;
