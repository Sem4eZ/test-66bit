import React, { useState } from "react";
import {
  setGender,
  setPosition,
  setStack,
} from "../../redux/slices/filterSlice";
import { useDispatch } from "react-redux";

const SelectEmployees = () => {
  const dispatch = useDispatch();
  const [position, setPositionLocal] = useState("");
  const [gender, setGenderLocal] = useState("");
  const [stack, setStackLocal] = useState("");

  const handlePositionChange = (e) => {
    setPositionLocal(e.target.value);
    dispatch(setPosition(e.target.value));
  };

  const handleGenderChange = (e) => {
    setGenderLocal(e.target.value);
    dispatch(setGender(e.target.value));
  };

  const handleStackChange = (e) => {
    setStackLocal(e.target.value);
    dispatch(setStack(e.target.value));
  };
  return (
    <div className="flex sm:justify-center font-normal pt-3 pb-4 md:py-6 text-[12px] sm:text-[20px] gap-3 sm:gap-8">
      <div className="">
        <select value={position} onChange={handlePositionChange}>
          <option value="">Должность</option>
          <option value="Frontend-разработчик">Frontend</option>
          <option value="Backend-разработчик">Backend</option>
          <option value="Аналитик">Analyst</option>
          <option value="Менеджер">Manager</option>
          <option value="Дизайнер">Designer</option>
        </select>
      </div>
      <div>
        <select value={gender} onChange={handleGenderChange}>
          <option value="">Пол</option>
          <option value="Мужчина">Мужчина</option>
          <option value="Женщина">Женщина</option>
        </select>
      </div>
      <div>
        <select value={stack} onChange={handleStackChange}>
          <option value="">Стэк технологий</option>
          <option value="CSharp">CSharp</option>
          <option value="React">React</option>
          <option value="Java">Java</option>
          <option value="PHP">PHP</option>
          <option value="Figma">Figma</option>
          <option value="Word">Word</option>
        </select>
      </div>
    </div>
  );
};

export default SelectEmployees;
