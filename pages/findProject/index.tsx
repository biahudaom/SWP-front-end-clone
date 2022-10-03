import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '../../components/JobPage/ProjectCard';
import SearchBar from '../../components/SearchBar';

function index() {
  return (
    <div className="flex flex-col items-center h-full justify-start">
      <SearchBar />
      <div className="w-full border-t border-t-gray-400 h-full flex justify-center items-center mt-5 pt-10">
        <ul className="w-9/12 h-full flex flex-col items-center xl:w-8/12 justify-center xl:grid xl:grid-cols-2 2xl:grid-cols-3 2xl:w-10/12">
          <ProjectCard
            projectName="Test Project"
            projectCity="Thanh Pho Ha Noi"
            projectSchool="Dai Hoc Ha Noi"
            projectTime="19/12/2022 - 31/12/2022"
            projectField="Electrical Engineering"
            projectSkills="MADLAB, Arduino"
            projectCriteria1="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            projectCriteria2="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            projectCriteria3="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          />
          <ProjectCard
            projectName="Test Project"
            projectCity="Thanh Pho Ha Noi"
            projectSchool="Dai Hoc Ha Noi"
            projectTime="19/12/2022 - 31/12/2022"
            projectField="Electrical Engineering"
            projectSkills="MADLAB, Arduino"
            projectCriteria1="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            projectCriteria2="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            projectCriteria3="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          />
          <ProjectCard
            projectName="Test Project"
            projectCity="Thanh Pho Ha Noi"
            projectSchool="Dai Hoc Ha Noi"
            projectTime="19/12/2022 - 31/12/2022"
            projectField="Electrical Engineering"
            projectSkills="MADLAB, Arduino"
            projectCriteria1="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            projectCriteria2="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            projectCriteria3="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          />
          <ProjectCard
            projectName="Test Project"
            projectCity="Thanh Pho Ha Noi"
            projectSchool="Dai Hoc Ha Noi"
            projectTime="19/12/2022 - 31/12/2022"
            projectField="Electrical Engineering"
            projectSkills="MADLAB, Arduino"
            projectCriteria1="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            projectCriteria2="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            projectCriteria3="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          />
          <ProjectCard
            projectName="Test Project"
            projectCity="Thanh Pho Ha Noi"
            projectSchool="Dai Hoc Ha Noi"
            projectTime="19/12/2022 - 31/12/2022"
            projectField="Electrical Engineering"
            projectSkills="MADLAB, Arduino"
            projectCriteria1="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            projectCriteria2="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            projectCriteria3="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          />
          <ProjectCard
            projectName="Test Project"
            projectCity="Thanh Pho Ha Noi"
            projectSchool="Dai Hoc Ha Noi"
            projectTime="19/12/2022 - 31/12/2022"
            projectField="Electrical Engineering"
            projectSkills="MADLAB, Arduino"
            projectCriteria1="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            projectCriteria2="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            projectCriteria3="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          />
        </ul>
      </div>
    </div>
  );
}

export default index;
