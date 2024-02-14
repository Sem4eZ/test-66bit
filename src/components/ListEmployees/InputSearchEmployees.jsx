import React from "react";

const InputSearchEmployees = () => {
  return (
    <div className="mx-auto max-w-[1590px] px-6 lg:mt-7">
      <input
        style={{ color: "text-[rgba(176, 176, 176, 1)]" }}
        type="text"
        placeholder="Поиск"
        className="border 1 w-full p-2 rounded-md "
      />
    </div>
  );
};

export default InputSearchEmployees;
