import React from 'react';
import JobDescription from '../../components/JobDescription';
import JobFull from '../../components/JobFull';
import SearchBar from '../../components/SearchBar';

function dummyPage() {
  return (
    <div className="flex flex-col items-center h-full justify-start">
      <div className="w-full h-full justify-center hidden xl:flex">
        <SearchBar />
      </div>

      <div className="w-full border-t border-t-gray-200 h-full flex justify-center">
        <div className="w-9/12 h-full flex justify-start mt-5 pt-10">
          <JobFull
            jobName="Tuyển NV Trực page - CSKH thu nhập trên 10tr"
            email="Email Nguoi Dang Project"
            school="School Nguoi Dang"
            city="Thanh Pho Ho Chi Minh"
            time="Thoi Gian Cua Project"
            numberOfPeople="Number Of People in Group"
            typeOfJob="Type Of Job"
          />
          <JobDescription
            desc="The event also applies to elements with contenteditable enabled, and to any element when designMode is turned on. In the case of contenteditable and designMode, the event target is the editing host. If these properties apply to multiple elements, the editing host is the nearest ancestor element whose parent isn't editable.

For <input> elements with type=checkbox or type=radio, the input event should fire whenever a user toggles the control, per the HTML Living Standard specification. However, historically this has not always been the case. Check compatibility, or use the change event instead for elements of these types.

For <textarea> and <input> elements that accept text input (type=text, type=tel, etc.), the interface is InputEvent; for others, the interface is Event.The event also applies to elements with contenteditable enabled, and to any element when designMode is turned on. In the case of contenteditable and designMode, the event target is the editing host. If these properties apply to multiple elements, the editing host is the nearest ancestor element whose parent isn't editable.

For <input> elements with type=checkbox or type=radio, the input event should fire whenever a user toggles the control, per the HTML Living Standard specification. However, historically this has not always been the case. Check compatibility, or use the change event instead for elements of these types.

For <textarea> and <input> elements that accept text input (type=text, type=tel, etc.), the interface is InputEvent; for others, the interface is Event."
          />
        </div>
      </div>
    </div>
  );
}

export default dummyPage;
