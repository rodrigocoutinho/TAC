import React, { useState } from "react";
import api from "../services/api";

//Tela para realização do login
const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');

    async function handleLogin() {
        const data = {
            email: user,
            password: password
        }
        const response = await api.post('http://localhost:8080/api/login', data);

        if (response.status === 201) {
            alert(response.data.mensagem);
            window.location.href = "http://localhost:3000/painel";
        }
        //recebe a mensagem da api e fica armazenada em status
        setStatus(response.data.mensagem);
    }
    function onSubmit(ev) {
        ev.preventDefault();
    }

    return (
        <form onSubmit={onSubmit}>
            <h1>PLAUS</h1>
            <h3>Login</h3>
            <div className="form-group">
                <label>E-mail</label>
                <input type="email" value={user} onChange={e => setUser(e.target.value)} className="form-control" placeholder="Enter email" />
            </div>
            <p />
            <div className="form-group">
                <label>Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Enter password" />
            </div>
            <p />
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember</label>
                </div>
                <p />
            </div>
            <button type="submit" onClick={handleLogin} className="btn btn-primary btn-block">Submit</button> &nbsp;&nbsp;&nbsp;

            <a href="/register">Register</a>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
            {status === "Usuário ou senha incorreta" ? <p style={{ color: "#ff0000" }}>{status}</p> : ""}
        </form>
    );
}

export default Login;