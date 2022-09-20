import React from 'react';

interface jobFullProps {
  jobName: string;
  email: string;
  school: string;
  city: string;
  time: string;
  numberOfPeople: string;
  typeOfJob: string;
}

function JobFull({
  jobName,
  email,
  school,
  city,
  time,
  numberOfPeople,
  typeOfJob,
}: jobFullProps) {
  return (
    <div className="w-1/2 my-1 h-full pr-10">
      <div className="text-2xl font-bold mb-1">{jobName}</div>
      <div className="text-blue-800">{email}</div>
      <div> {city}</div>
      <div>{time}</div>
      <button className="w-72 h-10 bg-blue-800 font-bold text-white rounded-lg p-5 hover:bg-blue-900 transition-all flex justify-center items-center self-center hover:shadow-md my-3">
        Apply Now
      </button>
      <div className="text-xl font-semibold my-3">Project Details</div>
      <div className="font-semibold mb-2">School</div>
      <div> {school}</div>
      <div className="font-semibold my-2 ">Number Of People in Group</div>
      <div>{numberOfPeople}</div>
      <div className="font-semibold my-2">Type Of Job</div>
      <div>{typeOfJob}</div>
    </div>
  );
}

export default JobFull;
