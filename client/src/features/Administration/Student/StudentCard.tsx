/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-shadow */
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import type { RootState} from "../../../redux/store";
import { useAppDispatch } from "../../../redux/store";
import { loadUsers } from "../reducer/StudentSlice";
import './student.css'




export default function StudentCard(): JSX.Element {

  const users = useSelector((store: RootState) => store.students.users);
  const {studentId} = useParams();
  const navigate = useNavigate();
  console.log(studentId);
  
  const student= users.find((stud => (studentId && stud.id === +studentId)))

  
  const dispatch=useAppDispatch()

  useEffect(() => {
    dispatch(loadUsers())
    return () => {
    };
  }, [])
  


  return (
    <div className="profile-container">
  <div className = "profile-picture">
    <img className='imgCard'src={student?.foto} alt="User Profile Picture"/>
    </div>
  <div className="profile-details">
    <div className="personal-details">
      <h2>{`${student?.firstName} ${student?.lastName} ${student?.surname}`}</h2>
      <p className="p-style">Город: {student?.city}</p>
      <p className="p-style">Курс: {student?.Course.name}</p>
      <p className="p-style">Дата принятия:{student?.receipt_date}</p>
    </div>
    <div className="professional-details">
      <p>sfdsfd </p>
      <p className="p-style">Должность: {student?.position}</p>
      <p className="p-style">Бизнес группа: {student?.bg}</p>
      <p className="p-style">Департамент: {student?.department}</p>
    </div>
  </div>
 <button onClick={() => navigate(-1)}>Вернуться</button>
</div>
  );
          }

