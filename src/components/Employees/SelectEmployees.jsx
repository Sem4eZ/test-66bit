import React, { useState } from "react";

const SelectEmployees = ({ filterEmployees }) => {
  const [position, setPosition] = useState("");
  const [gender, setGender] = useState("");
  const [stack, setStack] = useState("");

  const handleFilter = () => {
    // Вызываем функцию фильтрации из родительского компонента
    filterEmployees({ position, gender, stack });
  };

  return (
    <div className="flex sm:justify-center font-normal pt-3 pb-4 md:py-6 text-[12px] sm:text-[20px] gap-3 sm:gap-8">
      <div className="">
        <select value={position} onChange={(e) => setPosition(e.target.value)}>
          <option value="">Должность</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Analyst">Analyst</option>
          <option value="Manager">Manager</option>
          <option value="Designer">Designer</option>
        </select>
      </div>
      <div>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Пол</option>
          <option value="Мужчина">Мужчина</option>
          <option value="Женщина">Женщина</option>
        </select>
      </div>
      <div>
        <select value={stack} onChange={(e) => setStack(e.target.value)}>
          <option value="">Стэк технологий</option>
          <option value="CSharp">CSharp</option>
          <option value="React">React</option>
          <option value="Java">Java</option>
          <option value="PHP">PHP</option>
          <option value="Figma">Figma</option>
          <option value="Word">Word</option>
        </select>
      </div>
      <button onClick={handleFilter}>Применить фильтр</button>
    </div>
  );
};

export default SelectEmployees;
