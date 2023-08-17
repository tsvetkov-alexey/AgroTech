import React from 'react';
import st from './register.module.scss';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const navigate = useNavigate();

  const buttonHandler = () => {
    alert('Ваши данные успешно отправлены!');
    navigate('/');
  };

  return (
    <div className="main-block">
      <div className={st.containers}>
        <div className={st.inputContainer}>
          <label htmlFor="first-name">Имя:</label>
          <input type="text" id="first-name" placeholder="Введите имя" />
        </div>
        <div className={st.inputContainer}>
          <label htmlFor="last-name">Фамилия:</label>
          <input type="text" id="last-name" placeholder="Введите фамилию" />
        </div>
        <div className={st.inputContainer}>
          <label htmlFor="phone-number">Номер телефона:</label>
          <input type="tel" id="phone-number" placeholder="Введите номер телефона" />
        </div>
        <div className={st.inputContainer}>
          <label htmlFor="idea-description">Описание идеи:</label>
          <textarea id="idea-description" placeholder="Введите описание идеи" readOnly></textarea>
        </div>
        <button onClick={buttonHandler}>Отправить</button>
      </div>
    </div>
  );
};

export default Register;
