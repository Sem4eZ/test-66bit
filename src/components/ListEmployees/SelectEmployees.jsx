import React from "react";

const SelectEmployees = () => {
  return (
    <div className=" flex lg:flex justify-center font-normal text-xl py-6 text-[12px] sm:text-[20px]">
      <div className="">
        <select>
          <option value="someOption">Должность</option>
          <option value="otherOption">Other option</option>
        </select>
      </div>
      <div>
        <select>
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
