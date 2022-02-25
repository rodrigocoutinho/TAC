import React, { useState } from "react";

//Tela para realização do login
const Login =  () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(){
        
        
    }

        return (
            <form>
                <h1>PLAUS</h1>
                <h3>Login</h3>
                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email" value ={user} onChange={e => setUser(e.target.value)} className="form-control" placeholder="Enter email" />
                </div>
                <p />
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value ={password} onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Enter password" />
                </div>
                <p />
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember</label>
                    </div>
                    <p />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button> &nbsp;&nbsp;&nbsp;
                
                <button type="register" className="btn btn-primary btn-block" onClick={handleLogin}>Register</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }

    export default Login;