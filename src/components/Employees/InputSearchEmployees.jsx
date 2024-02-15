import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/slices/searchSlice";

const InputSearchEmployees = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };
  return (
    <div className="mx-auto max-w-[1590px] px-6 lg:mt-7 sm:mt-3">
      <input
        style={{ color: "text-[rgba(176, 176, 176, 1)]" }}
        type="text"
        placeholder="Поиск"
        className="border 1 w-full p-2 rounded-md bg-transparent"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default InputSearchEmployees;
