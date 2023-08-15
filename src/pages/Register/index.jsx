import React from 'react';
import st from './register.module.scss';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const buttonHandler = () => {
    alert('Ваши данные успешно отправлены!');
    navigate('/');
  };

  return (
    <div className="main-block">
      <div className={st.containers}>
        <div class={st.inputContainer}>
          <label for="first-name">Имя:</label>
          <input type="text" id="first-name" placeholder="Введите имя" />
        </div>
        <div class={st.inputContainer}>
          <label for="last-name">Фамилия:</label>
          <input type="text" id="last-name" placeholder="Введите фамилию" />
        </div>
        <div class={st.inputContainer}>
          <label for="phone-number">Номер телефона:</label>
          <input type="tel" id="phone-number" placeholder="Введите номер телефона" />
        </div>
        <div class={st.inputContainer}>
          <label for="idea-description">Описание идеи:</label>
          <textarea id="idea-description" placeholder="Введите описание идеи" readonly></textarea>
        </div>
        <button onClick={buttonHandler}>Отправить</button>
      </div>
    </div>
  );
};

export default Register;
