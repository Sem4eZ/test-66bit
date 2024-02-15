import React from "react";
import SelectEmployees from "./SelectEmployees";
import InputSearchEmployees from "./InputSearchEmployees";
import ChooseFilters from "./ChooseFilters";
import ListEmployees from "./ListEmployees";

const Employees = () => {
  return (
    <div>
      <div className="container mx-auto max-w-[1590px] px-6 font-medium lg:my-7 items-center justify-between md:flex ">
        <div
          style={{ color: "rgba(41, 41, 41, 1)" }}
          className="font-bold sm:pl-3 text-[20px] sm:text-[30px] md:text-[40px] "
        >
          Список сотрудников
        </div>
        <SelectEmployees />
      </div>
      <InputSearchEmployees />
      <ChooseFilters />
      <ListEmployees />
    </div>
  );
};

export default Employees;
