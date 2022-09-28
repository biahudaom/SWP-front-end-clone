import React from 'react';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid';

function Postjob() {
  const people = [
    { name: 'Less than 1 week' },
    { name: '1 - 2 weeks' },
    { name: '2 - 5 weeks' },
    { name: '5 - 10 weeks' },
    { name: 'More than 10 weeks' },
  ];

  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="flex justify-center mt-20">
      <div className="flex justify-between w-8/12 h-screen ">
        <form className="space-y-5 font-semibold text-lg">
          <div className=" text-4xl ">Create a project</div>
          <div>
            <h1>Your Project Name</h1>
            <input
              className="font-normal text-base border border-black rounded-lg h-10 w-full xl:w-11/12 mt-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 self-center  xl:col-span-3 focus:shadow-md pl-3"
              type="text"
              required
              placeholder='e.g. "Build a website for my business"'
            />
          </div>

          <div>
            <h1>Project University</h1>
            <input
              className="font-normal text-base border border-black rounded-lg h-10 w-full xl:w-11/12 mt-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 self-center  xl:col-span-3 focus:shadow-md pl-3"
              type="text"
              required
              placeholder='e.g. "University of Toronto"'
            />
          </div>
          <div>
            <h1>Project Location</h1>
            <input
              className="font-normal text-base border border-black rounded-lg h-10 w-full xl:w-11/12 mt-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 self-center  xl:col-span-3 focus:shadow-md pl-3"
              type="text"
              required
              placeholder='e.g. "Toronto, ON'
            />
          </div>
          <div>
            <h1>Time to finish </h1>
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative bg-gray-100 flex justify-start items-center border border-black rounded-lg h-12 w-full xl:w-11/12 mt-2">
                <Listbox.Button className="relative w-full bg-gray-100 cursor-default rounded-lg  py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{selected.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute top-12 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {people.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 flex justify-between ${
                            active
                              ? 'bg-amber-100 text-amber-900'
                              : 'text-gray-900'
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span className="relative inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon
                                  className="h-5 w-5 "
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
          <div>
            <h1>Skills Needed</h1>
            <input
              className="font-normal text-base border border-black rounded-lg h-10 w-full xl:w-11/12 mt-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 self-center  xl:col-span-3 focus:shadow-md pl-3"
              type="text"
              required
              placeholder='e.g. "React, Excel, Photoshop, etc."'
            />
          </div>
          <div>
            <h1>Field Needed </h1>
            <input
              className="font-normal text-base border border-black rounded-lg h-10 w-full xl:w-11/12 mt-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 self-center  xl:col-span-3 focus:shadow-md pl-3"
              type="text"
              required
              placeholder='e.g. "Web Development, Graphic Design, etc."'
            />
          </div>
          <div>
            <h1>Criteria</h1>
            <input
              className="font-normal text-base border border-black rounded-lg h-10 w-full xl:w-11/12 mt-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 self-center  xl:col-span-3 focus:shadow-md pl-3"
              type="text"
              required
              placeholder='e.g. "Must be a student at UBC, etc."'
            />
            <input
              className="font-normal text-base border border-black rounded-lg h-10 w-full xl:w-11/12 mt-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 self-center  xl:col-span-3 focus:shadow-md pl-3"
              type="text"
              required
              placeholder='e.g. "Must have a 3.5 GPA, etc."'
            />
            <input
              className="font-normal text-base border border-black rounded-lg h-10 w-full xl:w-11/12 mt-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 self-center  xl:col-span-3 focus:shadow-md pl-3"
              type="text"
              required
              placeholder='e.g. "Must be positive."'
            />
          </div>
          <div>
            <h1>Project Description </h1>
            <input
              className="font-normal text-base border border-black rounded-lg h-24 w-full xl:w-11/12 mt-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 self-center xl:col-span-3 focus:shadow-md pl-3"
              type="text"
              required
              placeholder='e.g. "I need a website for my business that is easy to use and looks good."'
            />
          </div>
          <button
            type="submit"
            className="w-11/12 h-12 bg-blue-800 font-semibold text-white rounded-lg p-5 hover:bg-blue-900 transition-all flex justify-center items-center self-center hover:shadow-md "
          >
            <h1 className="mr-2">Post Job</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-[0.15rem]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </form>
        <div className="hidden xl:flex justify-end items-center">
          <Image
            src={'/logoPostJob.png'}
            alt="Picture of the author"
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  );
}

export default Postjob;
