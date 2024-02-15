import React, { useState, useEffect, useNavigate } from "react";
// import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProfileEmployee = () => {
  //   const { employees } = useSelector((state) => state.employee);
  const { id } = useParams();
  //   const navigate = useNavigate();
  const [employee, setEmployee] = useState([]);
  console.log(id);

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
        // navigate("/");
      }
    }

    fetchEmployees();
  }, []);

  return (
    <div className="container">
      <div>{employee.name}</div>
      <img src={employee.photo} alt="" />
      <div>{employee.phone}</div>
      <div>{employee.gender}</div>
      <div>{employee.position}</div>
      <div>{employee.stack}</div>
      <div>{employee.birthdate}</div>
      <div>{employee.dateOfEmployment}</div>
    </div>
  );
};

export default ProfileEmployee;
