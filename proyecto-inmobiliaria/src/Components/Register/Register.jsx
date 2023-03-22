import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="login">
      <div className="contenedorLogin">
        <form type="onSubmit" className="formLogin">
          <h1>Welcome!</h1> <br />
          <h4>Register </h4> <br />
          <nav className="registerLogin"></nav>
          <div className="inputLogin">
            <label>
              Name: <br />
              <input
                className="inputRegister"
                type="text"
                name="Name"
                required
                placeholder="Ingrese su nombre"
                // onChange={onChangeValueUsuario}
              />
              <br />
            </label>
            <label>
              User: <br />
              <input
                className="inputRegister"
                type="text"
                name="Usuario"
                required
                placeholder="Ingrese su usuario"
                // onChange={onChangeValueUsuario}
              />
            </label>
            <br />
            <label>
              Password: <br />
              <input
                className="inputRegister"
                type="password"
                name="Password"
                required
                placeholder="Ingrese su contraseña"
                // onChange={onChangeValueContraseña}
              />
            </label>
          </div>
          <button type="submit" className="buttonLogin">
            Register
          </button>
          {/* <button type="submit" className="button">
            Register
          </button> */}
          <Link to={"/"}>
            <p>Login</p>
          </Link>
        </form>
        <div className="imageLogin"></div>
      </div>
    </div>
  );
}

export default Register;
