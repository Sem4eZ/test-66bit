import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LinksPages = ({ name }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className="container flex mx-auto max-w-[1590px]  font-medium my-7 items-center overflow-x-hidden ">
      {!name && (
        <>
          <button
            to={"/"}
            className={`mr-4 hover:underline ${
              theme === "dark" ? "text-[#b0b0b0]" : "text-[#b0b0b0]"
            }`}
          >
            Главная
          </button>
          <div className="mr-4">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.6259 2.45964C5.01643 2.06912 5.64959 2.06912 6.04011 2.45964L11.3734 7.79297C11.764 8.1835 11.764 8.81666 11.3734 9.20719L6.04011 14.5405C5.64959 14.931 5.01643 14.931 4.6259 14.5405C4.23538 14.15 4.23538 13.5168 4.6259 13.1263L9.25213 8.50008L4.6259 3.87385C4.23538 3.48333 4.23538 2.85017 4.6259 2.45964Z"
                fill="#B0B0B0"
              />
            </svg>
          </div>
        </>
      )}
      <Link to={"/"}>
        <button
          className={`mr-4 hover:underline ${
            theme === "dark" ? "text-[#b0b0b0]" : "text-[#b0b0b0]"
          }`}
        >
          Список сотрудников
        </button>
      </Link>
      {name && (
        <div className="mr-4">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.6259 2.45964C5.01643 2.06912 5.64959 2.06912 6.04011 2.45964L11.3734 7.79297C11.764 8.1835 11.764 8.81666 11.3734 9.20719L6.04011 14.5405C5.64959 14.931 5.01643 14.931 4.6259 14.5405C4.23538 14.15 4.23538 13.5168 4.6259 13.1263L9.25213 8.50008L4.6259 3.87385C4.23538 3.48333 4.23538 2.85017 4.6259 2.45964Z"
              fill="#B0B0B0"
            />
          </svg>
        </div>
      )}
      <div style={{ color: "rgba(176, 176, 176, 1)" }}>{name}</div>
    </div>
  );
};

export default LinksPages;
