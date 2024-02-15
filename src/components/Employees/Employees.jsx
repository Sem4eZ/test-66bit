import React from "react";
import SelectEmployees from "./SelectEmployees";
import InputSearchEmployees from "./InputSearchEmployees";
import ChooseFilters from "./ChooseFilters";
import ListEmployees from "./ListEmployees";
import { useSelector } from "react-redux";

const Employees = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div>
      <div className="container mx-auto max-w-[1590px] px-6 font-medium lg:my-7 items-center justify-between md:flex ">
        <div
          className={`font-bold text-[20px] sm:text-[30px] md:text-[40px] ${
            theme === "dark" ? "text-[#f5f5f5]" : "text-[#292929]"
          }`}
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
