import React, { useState } from 'react';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { changeUserData } from '../auth/authSlice';

export default function LKmain() {
  const user = useSelector((store: RootState) => store.auth.user);

  const [firstName, setFname] = useState(user?.firstName);
  const [lastName, setLname] = useState(user?.lastName);
  const [surname, setPname] = useState(user?.surname);
  const [telephone, setPhone] = useState(user?.telephone);
  const [city, setCity] = useState(user?.city);
  const [position, setPosition] = useState(user?.position);
  const [email, setEmail] = useState(user?.email);
  const id = user?.id;
  
  const [butt, setButt] = useState(false);
  

  const dispatch = useAppDispatch();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement>= async (e) => {
    e.preventDefault();
    if (id && firstName && lastName && surname && city && position && email && telephone) {
      dispatch(
        changeUserData({ id, firstName, lastName, surname, telephone, city, position, email }),
      );
      setButt(false);
    }
  };

  return (
    <div>
      <div className="LK_main_click">
        <div className="LK_main_header">Личная информация</div>
        <form className="LK_pers_info" onSubmit={onHandleSubmit}>
          <div className="LK_pers_info_photo">
            <img></img>
          </div>
          <div className="LK_pers_info_names">
            <div onClick={() => setButt(true)} className="LK_pers_info_fname">
              <input
                placeholder="Имя"
                value={firstName}
                onChange={(e) => setFname(e.target.value)}
                className="LK_pers_info_fname_input"
              ></input>
            </div>
            <div onClick={() => setButt(true)} className="LK_pers_info_lname">
              <input
                placeholder="Отчество"
                value={lastName}
                onChange={(e) => setLname(e.target.value)}
                className="LK_pers_info_lname_input"
              ></input>
            </div>
            <div onClick={() => setButt(true)} className="LK_pers_info_pname">
              <input
                placeholder="Фамилия"
                value={surname}
                onChange={(e) => setPname(e.target.value)}
                className="LK_pers_info_pname_input"
              ></input>
            </div>
          </div>
          <div className="LK_pers_info_others">
            <div onClick={() => setButt(true)} className="LK_pers_info_others_phone">
              <input
                placeholder="Телефон"
                value={telephone}
                onChange={(e) => setPhone(e.target.value)}
                className="LK_pers_info_phone_input"
              ></input>
            </div>
            <div onClick={() => setButt(true)} className="LK_pers_info_others_phone">
              <input
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="LK_pers_info_phone_input"
              ></input>
            </div>
            <div onClick={() => setButt(true)} className="LK_pers_info_others_city">
              <input
                placeholder="Город"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="LK_pers_info_city_input"
              ></input>
            </div>
            <div onClick={() => setButt(true)} className="LK_pers_info_position">
              <input
                onChange={(e) => setPosition(e.target.value)}
                value={position}
                className="LK_pers_info_position_input"
              ></input>
            </div>
          </div>
          {butt && <button className="LK_pers_info_bttn" type="submit"></button>}
        </form>
      </div>
    </div>
  );
}
