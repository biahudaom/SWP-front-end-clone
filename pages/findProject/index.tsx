import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '../../components/ProjectCard';
import SearchBar from '../../components/SearchBar';

function index() {
  return (
    <div className="flex flex-col items-center h-full justify-start">
      <SearchBar />
      <div className="w-full border-t border-t-gray-400 h-full flex justify-center items-center mt-5 pt-10">
        <ul className="w-[62.5%] h-full grid grid-cols-1 xl:grid-cols-2">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </ul>
      </div>
    </div>
  );
}

export default index;
