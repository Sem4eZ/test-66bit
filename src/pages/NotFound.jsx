import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="flex items-center flex-col mt-40 gap-20">
        <h1 className="text-xl font-semibold">
          Ошибка 404. К сожалению, такой страницы не существует!
        </h1>
        <Link to={"/"}>
          <button className="py-4 px-12 bg-[#155DA4] rounded-md text-white font-semibold">
            Вернуться назад
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
