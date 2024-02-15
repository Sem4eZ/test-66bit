import React, { useState, useEffect, useNavigate } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LinksPages from "../LinksPages";

const ProfileEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    async function fetchEmployees() {
      try {
        const { data } = await axios.get(
          `https://frontend-test-api.stk8s.66bit.ru/api/Employee/${id}`
        );
        setEmployee(data);
      } catch (error) {
        alert(
          "К сожалению мы не смогли найти вашего работника, попробуйте выбрать другого"
        );
        window.location.href = "/";
      }
    }

    fetchEmployees();
  }, []);

  return (
    <div className="mx-auto max-w-[1590px] px-6">
      <LinksPages name={employee.name} />
      <div className="flex">
        <img
          src={employee.photo}
          alt=""
          className="rounded-full w-[105px] h-[105px]"
        />
        <div className="ml-4">
          <div className="font-bold text-xl mb-2">{employee.name}</div>
          <div className="font-medium text-sm">{employee.position}</div>
        </div>
      </div>
      <div>
        {employee.stack && employee.stack.length > 0 && (
          <div className="flex gap-2">
            {employee.stack.map((stackItem, index) => (
              <div
                key={index}
                className="bg-[#F2F2F2] py-2.5 px-4 rounded-md mb-5 mt-3"
              >
                {stackItem}
              </div>
            ))}
          </div>
        )}

        <hr />
      </div>

      <div >
        <div>Основная информация</div>
        <div>
          <div>{employee.phone}</div>
          <div>{employee.gender}</div>

          <div>{employee.birthdate}</div>
          <div>{employee.dateOfEmployment}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEmployee;
