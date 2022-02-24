import React from "react";

//Tela para realização do login
export default function Login () {

        return (
            <form>
                <h3>Login</h3>
                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <p />
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
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
                
                <button type="register" className="btn btn-primary btn-block">Register</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }