import React from "react";

const SelectEmployees = () => {
  return (
    <div className="flex sm:justify-center font-normal pt-3 pb-4 md:py-6 text-[12px] sm:text-[20px] gap-3 sm:gap-8">
      <div className="">
        <select>
          <option value="someOption">Должность</option>
          <option value="otherOption">Other option</option>
        </select>
      </div>
      <div>
        <select className="sm:w-16 md:w-18 lg:w-[70px] w-12">
          <option value="someOption">Пол</option>
          <option value="otherOption">Other option</option>
        </select>
      </div>
      <div>
        <select>
          <option value="someOption">Стэк технологий</option>
          <option value="otherOption">Other option</option>
        </select>
      </div>
    </div>
  );
};

export default SelectEmployees;
