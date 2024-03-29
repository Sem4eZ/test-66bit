import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setRemoveGender,
  setRemovePosition,
  setRemoveStack,
} from "../../redux/slices/filterSlice";

const ChooseFilters = () => {
  const dispatch = useDispatch();
  const { position } = useSelector((state) => state.filter);
  const { gender } = useSelector((state) => state.filter);
  const { stack } = useSelector((state) => state.filter);
  const { theme } = useSelector((state) => state.theme);

  const handleRemovePosition = () => {
    dispatch(setRemovePosition(position));
  };

  const handleRemoveGender = () => {
    dispatch(setRemoveGender(gender));
  };

  const handleRemoveStack = () => {
    dispatch(setRemoveStack(stack));
  };

  return (
    <div className={`${theme === "dark" ? "bg-[#3E3E3E]" : "bg-[#F2F2F2]"}`}>
      <div className="mx-auto max-w-[1590px] mt-4 lg:mt-7 px-6 md sm:flex justify-between items-center py-4">
        <div className="sm:flex items-center">
          <div className="mb-3 mr-0 sm:mb-0 sm:mr-4 md:mr-10">
            Выбранные фильтры:
          </div>
          <div className="flex flex-wrap gap-6  mr-2">
            {position && (
              <li
                className={`flex items-center  p-2.5 rounded-md ${
                  theme === "dark" ? "bg-[#292929]" : "bg-[#FFFFFF]"
                }`}
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleRemovePosition}
                  className={`${
                    theme === "dark" ? "text-[#f5f5f5]" : "text-[#292929]"
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.67824 4.99992L9.85953 0.818698C10.0468 0.631402 10.0468 0.327767 9.85953 0.140471C9.67223 -0.0468238 9.36859 -0.0468238 9.18129 0.140471L5 4.32169L0.818711 0.141111C0.631412 -0.0461846 0.327772 -0.0461846 0.140474 0.141111C-0.0468245 0.328406 -0.0468245 0.632042 0.140474 0.819337L4.32176 5.00056L0.141113 9.18114C-0.0461853 9.36844 -0.0461853 9.67207 0.141113 9.85937C0.235082 9.9527 0.357177 10 0.479912 10C0.602646 10 0.725381 9.95334 0.818711 9.85937L5 5.67815L9.18129 9.85937C9.27526 9.9527 9.39735 10 9.52009 10C9.64282 10 9.76556 9.95334 9.85889 9.85937C10.0462 9.67207 10.0462 9.36844 9.85889 9.18114L5.67824 4.99992Z"
                    fill={`${theme === "dark" ? "#f5f5f5" : "#292929"}`}
                  />
                </svg>

                <div className="ml-2.5">{position}</div>
              </li>
            )}
            {gender && (
              <li
                className={`flex items-center  p-2.5 rounded-md ${
                  theme === "dark" ? "bg-[#292929]" : "bg-[#FFFFFF]"
                }`}
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleRemoveGender}
                  className={`${
                    theme === "dark" ? "text-[#f5f5f5]" : "text-[#292929]"
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.67824 4.99992L9.85953 0.818698C10.0468 0.631402 10.0468 0.327767 9.85953 0.140471C9.67223 -0.0468238 9.36859 -0.0468238 9.18129 0.140471L5 4.32169L0.818711 0.141111C0.631412 -0.0461846 0.327772 -0.0461846 0.140474 0.141111C-0.0468245 0.328406 -0.0468245 0.632042 0.140474 0.819337L4.32176 5.00056L0.141113 9.18114C-0.0461853 9.36844 -0.0461853 9.67207 0.141113 9.85937C0.235082 9.9527 0.357177 10 0.479912 10C0.602646 10 0.725381 9.95334 0.818711 9.85937L5 5.67815L9.18129 9.85937C9.27526 9.9527 9.39735 10 9.52009 10C9.64282 10 9.76556 9.95334 9.85889 9.85937C10.0462 9.67207 10.0462 9.36844 9.85889 9.18114L5.67824 4.99992Z"
                    fill={`${theme === "dark" ? "#f5f5f5" : "#292929"}`}
                  />
                </svg>

                <div className="ml-2.5">{gender}</div>
              </li>
            )}
            {stack && (
              <li
                className={`flex items-center  p-2.5 rounded-md ${
                  theme === "dark" ? "bg-[#292929]" : "bg-[#FFFFFF]"
                }`}
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleRemoveStack}
                  className={`${
                    theme === "dark" ? "text-[#f5f5f5]" : "text-[#292929]"
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.67824 4.99992L9.85953 0.818698C10.0468 0.631402 10.0468 0.327767 9.85953 0.140471C9.67223 -0.0468238 9.36859 -0.0468238 9.18129 0.140471L5 4.32169L0.818711 0.141111C0.631412 -0.0461846 0.327772 -0.0461846 0.140474 0.141111C-0.0468245 0.328406 -0.0468245 0.632042 0.140474 0.819337L4.32176 5.00056L0.141113 9.18114C-0.0461853 9.36844 -0.0461853 9.67207 0.141113 9.85937C0.235082 9.9527 0.357177 10 0.479912 10C0.602646 10 0.725381 9.95334 0.818711 9.85937L5 5.67815L9.18129 9.85937C9.27526 9.9527 9.39735 10 9.52009 10C9.64282 10 9.76556 9.95334 9.85889 9.85937C10.0462 9.67207 10.0462 9.36844 9.85889 9.18114L5.67824 4.99992Z"
                    fill={`${theme === "dark" ? "#f5f5f5" : "#292929"}`}
                  />
                </svg>

                <div className="ml-2.5">{stack}</div>
              </li>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseFilters;
