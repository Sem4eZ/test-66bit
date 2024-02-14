// import React, { useEffect, useState, useRef } from "react";

// const ListEmployees = () => {
//   const [employees, setEmployees] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     getEmployees();
//   }, []);

//   const getEmployees = async () => {
//     try {
//       await fetch(
//         `https://frontend-test-api.stk8s.66bit.ru/api/Employee/?page=${page}`
//       )
//         .then((response) => {
//           return response.json();
//         })
//         .then((array) => {
//           setEmployees(array);
//           setPage(page + 1);
//         });
//     } catch (error) {
//       console.error("Error loading more employees:", error);
//     }
//   };

//   return (
//     <div className="mx-auto max-w-[1590px] px-6 mt-8 ">
//       <div className="">
//         <div className="grid grid-cols-4 ">
//           <div className="py-4 px-2 ">ФИО</div>
//           <div className="py-4 px-2 ">Должность</div>
//           <div className="py-4 px-2 ">Телефон</div>
//           <div className="py-4 px-2">Дата рождения</div>
//         </div>
//         {employees.map((employee, index) => (
//           <div key={index} className="grid grid-cols-4 hover:bg-[#F2F2F2]">
//             <div className="py-4 px-2 ">{employee.name}</div>
//             <div className="py-4 px-2 ">{employee.position}</div>
//             <div className="py-4 px-2 ">{employee.phone}</div>
//             <div className="py-4 px-2">{employee.birthdate}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ListEmployees;

import React, { useEffect, useState, useRef, useCallback } from "react";

const ListEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);

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
          console.log(response);
          return response.json();
        })
        .then((array) => {
          setEmployees((prevEmployees) => [...prevEmployees, ...array]);
          setPage((page) => page + 1);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  return (
    <div className="mx-auto max-w-[1590px] px-6 mt-8 overflow-y-auto">
      <div className="">
        <div className="grid grid-cols-4 ">
          <div className="py-4 px-2 ">ФИО</div>
          <div className="py-4 px-2 ">Должность</div>
          <div className="py-4 px-2 ">Телефон</div>
          <div className="py-4 px-2">Дата рождения</div>
        </div>
        {employees.map((employee, index) => (
          <div key={index} className="grid grid-cols-4 hover:bg-[#F2F2F2]">
            <div className="py-4 px-2 ">{employee.name}</div>
            <div className="py-4 px-2 ">{employee.position}</div>
            <div className="py-4 px-2 ">{employee.phone}</div>
            <div className="py-4 px-2">{employee.birthdate}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListEmployees;
