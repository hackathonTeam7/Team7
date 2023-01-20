import React from 'react';
import soloEngImg from '../../src/images/logo.png';
import './registerPage.css';

const RegisterPage = () => {
	return (
		<>
			<main className="register">
				<div className="register__container">
					<div className="register__wrapper">
						<div className="register__sidebar">
							<div className="register__logo-img">
								<img src={soloEngImg} alt="img" />
							</div>
						</div>
						<form className="register__form">
							<div className="register__form-block">
								<div className="register__form-link">
									<p>Уже есть аккаунт?
										<a href='#logo'>Войти</a>
									</p>
								</div>
								<div className="register__input-Div">
									<label>Имя пользователя</label>
									<input type="username" className="register__username-input"/>
								</div>
								<br />
								<div className="register__input-Div">
									<label>Email адрес</label>
									<input type="email" className="register__email-input"/>
								</div>
								<br />
								<div className="register__input-Div">
									<label>Пароль</label>
									<input type="password" className="register__password-input"/>
								</div>
								<br />
								<div className="register__flex-Div">
									<div className="register__checkbox-Div">
										<label className="register__lable" htmlFor="checkbox"><span>Принять условия</span></label>
										<div className="register__checkbox"></div>
									</div>
									<button type="submit" className="register__btn">
										Зарегистрироваться
									</button>
								</div>
								<p>Или войти с помощью</p>
								<div className="register__gf">
									<div className="google__signin">
										<a href="#google" className="google__signin-link">Google</a>
									</div>
									<div className="facebook__signin">
										<a href="#facebook" className="facebook__signin-link">Facebook</a>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</main>
		</>
	)
}

export default RegisterPage;