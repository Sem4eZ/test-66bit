import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setEmployees } from "../../redux/slices/employeeSlice";
import { Link } from "react-router-dom";

const ListEmployees = () => {
  const dispatch = useDispatch();
  const { employees } = useSelector((state) => state.employee);
  const { search } = useSelector((state) => state.search);
  const { position, gender, stack } = useSelector((state) => state.filter);
  const { theme } = useSelector((state) => state.theme);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  const filteredEmployees = employees.filter(
    (employee) =>
      (employee.name.toLowerCase().includes(search.toLowerCase()) ||
        employee.position.toLowerCase().includes(search.toLowerCase()) ||
        employee.phone.toLowerCase().includes(search.toLowerCase()) ||
        employee.birthdate.toLowerCase().includes(search.toLowerCase())) &&
      (position === "" || employee.position === position) &&
      (gender === "" || employee.gender === gender) &&
      (stack === "" || employee.stack.includes(stack))
  );

  useEffect(() => {
    if (filteredEmployees.length < 4) {
      scrollHandler(10);
    }
  }, [filteredEmployees, gender, position, search, stack]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (fetching && page < 11) {
      fetch(
        `https://frontend-test-api.stk8s.66bit.ru/api/Employee/?page=${page}`
      )
        .then((response) => {
          return response.json();
        })
        .then((array) => {
          dispatch(setEmployees(array));
          setPage((page) => page + 1);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching, page]);

  const scrollHandler = () => {
    if (
      document.documentElement.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  return (
    <div className="mx-auto max-w-[1590px] px-6 mt-8 overflow-y-auto">
      <div className="">
        <div
          className={`grid  grid-cols-2 sm:grid-cols-4 w-full ${
            theme === "dark" ? "text-[#b0b0b0]" : "text-[#b0b0b0]"
          }`}
        >
          <div className="py-4 px-2 ">ФИО</div>
          <div className="py-4 px-2 ">Должность</div>
          <div className="py-4 px-2 hidden sm:block">Телефон</div>
          <div className="py-4 px-2 hidden sm:block">Дата рождения</div>
        </div>
        {filteredEmployees.map((employee, index) => (
          <Link to={`/employee/${employee.id}`} key={index}>
            <div
              key={index}
              className={`grid grid-cols-2 sm:grid-cols-4  ${
                theme === "dark"
                  ? "text-[#f5f5f5] hover:bg-[#3e3e3e]"
                  : "text-[#292929] hover:bg-[#F2F2F2]"
              }`}
            >
              <div className="py-4 px-2 ">{employee.name}</div>
              <div className="py-4 px-2 ">{employee.position}</div>
              <div className="py-4 px-2 hidden sm:block">{employee.phone}</div>
              <div className="py-4 px-2 hidden sm:block">
                {employee.birthdate}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListEmployees;
