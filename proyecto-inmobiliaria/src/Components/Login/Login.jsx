import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../index.css";
import { login } from "../../API/Rule_User";
import { useEffect } from "react";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const onChangeValueUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const onChangeValueContraseña = (e) => {
    setContraseña(e.target.value);
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("mensaje", usuario, contraseña);
    await login({ email: usuario, contraseña: contraseña })
      .then((response) => {
        console.log("response", response);
        navigate("/home");
        // alert(response.token);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    const imageLogin = document.querySelector(".imageLogin");
    const images = [
      "./Images/fotoPubli.jpg",
      "./Images/login2.jpg",
      "./Images/casa9.jpg",
      "./Images/login3.jpg",
    ];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      imageLogin.style.backgroundImage = `url(${images[index]})`;
    }, 5000);
    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  return (
    <div className="login">
      <div className="contenedorLogin">
        <form type="onSubmit" className="formLogin" onSubmit={handleSubmit}>
          <img src="./Images/juanita.png" alt="" className="logoUsuario" />
          <h1>Welcome!</h1> <br />
          <h4>Login your account </h4> <br />
          <nav className="registerLogin"></nav>
          <div className="inputLogin">
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
            Login
          </button>
          {/* <button type="submit" className="button">
            Register
          </button> */}
          <p>
            New user? <Link to={"/register"}> Register </Link>{" "}
          </p>
        </form>
        <div className="imageLogin"></div>
      </div>
    </div>
  );
}

export default Login;
