import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../Redux/actions/userActions';
import '../Styles/styles.scss';

const Login: React.FC = () => {
/*     const dispatch = useDispatch(); */
    const history = useHistory();

    const clickLogin = async (event/*tipar */): Promise<void> => {
        event.preventDefault();
        const body: {
            email: string,
            password: string
        } = {
            email: event.target.email.value,
            password: event.target.password.value
        }
/*         dispatch(userLogin(body)) */;
        history.push("/allposts")


    }

    return (
        <div className="main_login_container">

            <div className="card_login">
                <div className="card_login__title"><h2>Welcome to my app</h2>
                    <div><h3> Technical test for Cleverpy</h3></div>
             <h4>Please hire me!</h4></div>
                <form className="login_form" onSubmit={clickLogin}>
                    <input className="login_form__input" type="email" name="email" placeholder="Correo electrónico" />
                    <input className="login_form__input" type="password" name="password" placeholder="Contraseña" />
<div className="button__box">
                    <button className="button" type="submit"><h3>Sign In</h3></button></div>
                </form>
            </div>
            <div></div>
            </div>
        

    )
}

export default Login
