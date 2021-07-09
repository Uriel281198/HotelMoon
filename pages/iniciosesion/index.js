import { Box } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import NavBar from "../../components/shared/NavBar";

import { useRouter } from "next/router";
import {
  Container,
  InputsContainer,
  Switcher,
  Wrapper,
  Hero,
  ErrorBox,
} from "../../styles/login.styles";

import { useForm } from "react-hook-form";
import { RemoveRedEye, VisibilityOff } from "@material-ui/icons";

export default function login() {
  const [isLogin, setIsLogin] = useState(false);

  const [hidden, changeHidden] = useState(true);
  const [hideenTwo, setHideenTwo] = useState(true);
  const router = useRouter();

  const defaultValues = {
    name: "Uriel",
    lastname: "Arriaga",
    email: "urielmedical@gmail.com",
    password: "medicalbuy123",
    passwordConfirmation: "medicalbuy123",
  };

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({ defaultValues });

  const toggleLogin = () => setIsLogin(!isLogin);
  
  const resetForm = () => {
    reset({
      keepErrors: true,
      keepDirty: true,
      keepIsSubmitted: false,
      keepTouched: false,
      keepIsValid: false,
      keepSubmitCount: false,
    });
  };

  const registerUser = (formData) => {
    alert(JSON.stringify(formData));
    console.log(formData);
    router.push("/profile");
    resetForm();
  };

  const loginUser = (formData) => {
    // alert(JSON.stringify(formData));
    router.push("/");
    console.log("as");
  };

  const renderLogin = () => (
    <Box>
      <form>
        <input className="input" placeholder="Correo" />
        <input className="input" placeholder="Password" />
        <Box className="btnBox">
          <button className="btn_search" onClick={() => loginUser()}>
            Iniciar Sesion
          </button>
        </Box>
        <p className="nohave_account">
          Aun no tienes una cuenta
          <span onClick={isLogin ? () => toggleLogin() : null}>
            registrate aqui
          </span>
        </p>
      </form>
    </Box>
  );

  const renderRegisters = () => (
    <Box>
      <form onSubmit={handleSubmit(registerUser)} autoComplete="off">
        <ErrorBox>
          {errors.name && errors.name.type === "required" && (
            <span>El campo nombre es requerido</span>
          )}
          {errors.name && errors.name.type === "minLength" && (
            <span>Minimo 5 caracteres </span>
          )}
        </ErrorBox>
        <input
          {...register("name", { required: true, minLength: 5 })}
          id="name"
          type="text"
          name="name"
          className="input"
          placeholder="Nombre"
        />
        {errors.lastname && (
          <span className="wrong">This field is required</span>
        )}
        <input
          {...register("lastname", { required: true })}
          id="title"
          className="input"
          placeholder="Apellidos"
        />
        {errors.email && (
          <span className="wrong" role="alert">
            {errors.email.message}
          </span>
        )}
        <input
          className="input"
          id="email"
          type="email"
          autoComplete="off"
          placeholder="Correo"
          {...register("email", {
            required: "required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Entered value does not match email format",
            },
          })}
        />
        {errors.password && errors.password.type === "required" && (
          <span>This is required</span>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <span>The min lenght </span>
        )}
        <Box
          display="flex"
          style={{ height: 50, position: "relative", marginBottom: 30 }}
        >
          <input
            {...register("password", {
              required: true,
              minLength: 8,
            })}
            id="password"
            className="input"
            placeholder="password"
            type={`${hidden ? "password" : "text"}`}
          />
          {!hidden ? (
            <RemoveRedEye
              onClick={() => changeHidden(!hidden)}
              style={{ position: "absolute", right: 15, top: 15 }}
            />
          ) : (
            <VisibilityOff
              onClick={() => changeHidden(!hidden)}
              style={{ position: "absolute", right: 15, top: 15 }}
            />
          )}
          <RemoveRedEye
            onClick={() => changeHidden(!hidden)}
            style={{ position: "absolute", right: 15, top: 15 }}
          />
        </Box>

        {errors.passwordConfirmation && (
          <p style={{ color: "red" }}>{errors.passwordConfirmation.message}</p>
        )}
        <Box display="flex" style={{ height: 50, position: "relative" }}>
          <input
            {...register("passwordConfirmation", {
              required: "Please confirm password!",
              validate: {
                matchesPreviousPassword: (value) => {
                  const { password } = getValues();
                  return password === value || "Passwords should match!";
                },
              },
            })}
            className="input"
            placeholder="repeat password"
            type={`${hideenTwo ? "password" : "text"}`}
          />
          {!hideenTwo ? (
            <RemoveRedEye
              onClick={() => setHideenTwo(!hideenTwo)}
              style={{ position: "absolute", right: 15, top: 15 }}
            />
          ) : (
            <VisibilityOff
              onClick={() => setHideenTwo(!hideenTwo)}
              style={{ position: "absolute", right: 15, top: 15 }}
            />
          )}
        </Box>

        <Box className="btnBox">
          <button className="btn_search" type="submit">
            Registrarme
          </button>
        </Box>

        <p
          className="nohave_account"
          onClick={!isLogin ? () => toggleLogin() : null}
        >
          Ya tienes una cuenta <span>Inicia sesion aqui</span>
        </p>
      </form>
    </Box>
  );

  return (
    <Container>
      <Hero>
        <NavBar isHome={true} />
        <Wrapper>
          <InputsContainer>
            <Box className="register_title">
              <p>Inicio de sesion o Registro</p>
            </Box>
            <Switcher>
              <Box
                className={`switch_option ${isLogin && "active"}`}
                onClick={!isLogin ? () => toggleLogin() : null}
              >
                <p>Login</p>
              </Box>
              <p className="divider">/</p>
              <Box
                className={`switch_option ${!isLogin && "active"}`}
                onClick={isLogin ? () => toggleLogin() : null}
              >
                <p>Registro</p>
              </Box>
            </Switcher>
            {isLogin ? renderLogin() : renderRegisters()}
          </InputsContainer>
        </Wrapper>
      </Hero>
    </Container>
  );
}


/*
v/ au


*/