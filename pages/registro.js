import { Box, Grid } from "@material-ui/core";
import React, { useContext, useState } from "react";
import NavBar from "../components/shared/NavBar";
import { useRouter } from "next/router";
import { RemoveRedEye, VisibilityOff } from "@material-ui/icons";
import {
  Container,
  InputsContainer,
  InputContainer,
  Wrapper,
  Hero,
} from "../styles/login.styles";

import { useForm } from "react-hook-form";
import ShowAlert from "../components/AlertWrong";
import { normalizeUser } from "../utils/methods";
import { api } from "../services/api";
import { userContext } from "../context/userContext";
import { Alert, AlertTitle } from "@material-ui/lab";
import NavBarProfile from "../components/shared/NavBarProfile";

export default function registro() {
  const { RegisterUser } = useContext(userContext);
  const [isLogin, setIsLogin] = useState(false);
  const [hidden, changeHidden] = useState(true);
  const [hideenTwo, setHideenTwo] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [error, handleError] = useState({ msg: "", error: false });

  const router = useRouter();

  const defaultValues = {
    username: "uriel0550 ",
    name: "Uriel",
    lastname: "Arriaga",
    email: "urie_sic@tesco.edu.mx",
    password: "uri12345",
    passwordConfirmation: "uri12345",
  };

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

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

  const goToLogin = () => {
    router.push("/iniciosesion");
  };

  const registerUser = (formData) => {
    console.log(formData);
    const data = normalizeUser(formData);
    handleRegister(data);
  };

  const ShowWarning = (msg, error) => {
    handleError({ msg, error });
  };

  const handleRegister = async (payload) => {
    console.log(payload);
    setLoading(true);
    try {
      let userResponse = await api.post("users", payload);
      RegisterUser(userResponse);
      router.push("/");
      setLoading(false);
    } catch (error) {
      console.log(error);
      if (error.response != undefined) {
        switch (error.response.data.code) {
          case 202:
            ShowWarning("Este nombre de usuario ya esta en uso", true);
            setLoading(false);
            break;
          case 203:
            ShowWarning("Este e-mail ya esta en uso ", true);
            setLoading(false);
            break;
          default:
            ShowWarning("Ocurrio algun problema", true);
            setLoading(false);
            break;
        }
      } else {
        console.log(error);
      }
    }
  };

  const renderRegisters = () => (
    <Box>
      <form onSubmit={handleSubmit(registerUser)} autoComplete="off">
        <Grid container>
          <Grid item xs={12} md={12}>
            <InputContainer className="column">
              <label>Nombre de usuario </label>
              <input
                {...register("username", { required: true, minLength: 5 })}
                id="username"
                type="text"
                name="username"
                className="input"
                placeholder="Ej. username123"
              />
              {errors.username && errors.username.type === "required" && (
                <ShowAlert name="Nombre de usuario" />
              )}
            </InputContainer>
          </Grid>

          <Grid item xs={12} md={12}>
            <InputContainer className="column">
              <label>Nombre </label>
              <input
                {...register("name", { required: true })}
                id="name"
                type="text"
                name="name"
                className="input"
                placeholder="Nombre"
              />
              {errors.name && errors.name.type === "required" && (
                <ShowAlert name="Nombre" />
              )}
            </InputContainer>
          </Grid>

          <Grid item xs={12} md={12}>
            <InputContainer className="column">
              <label>Apellidos</label>
              <input
                {...register("lastname", { required: true })}
                id="lastname"
                type="text"
                name="lastname"
                className="input"
                placeholder="Apellidos "
              />
              {errors.lastname && errors.lastname.type === "required" && (
                <ShowAlert name="Apellidos" />
              )}
            </InputContainer>
          </Grid>

          <Grid item xs={12} md={12}>
            <InputContainer className="column">
              <label>Correo</label>
              <input
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Entered value does not match email format",
                  },
                })}
                id="email"
                type="text"
                name="email"
                className="input"
                placeholder="Correo "
              />
              {errors.email && errors.email.type === "required" && (
                <ShowAlert name="Correo" />
              )}

              {errors.email && errors.email.type === "pattern" && (
                <ShowAlert name="pattern" />
              )}
            </InputContainer>
          </Grid>

          <Grid item xs={12} md={12}>
            <InputContainer>
              <label>Contraseña</label>
              <Box display="flex" position="relative">
                <input
                  {...register("password", {
                    required: true,
                    minLength: 8,
                  })}
                  id="password"
                  name="password"
                  className="input"
                  placeholder="Contraseña"
                  type={`${hidden ? "password" : "text"}`}
                />
                {!hidden ? (
                  <RemoveRedEye
                    onClick={() => changeHidden(!hidden)}
                    className="eye"
                  />
                ) : (
                  <VisibilityOff
                    onClick={() => changeHidden(!hidden)}
                    style={{ position: "absolute", right: 15, top: 15 }}
                  />
                )}
              </Box>
              {errors.password && errors.password.type === "required" && (
                <ShowAlert name="password" />
              )}

              {errors.password && errors.password.type === "minLength" && (
                <ShowAlert name="minlengh" />
              )}
            </InputContainer>
          </Grid>

          <Grid item xs={12} md={12}>
            <InputContainer>
              <label>Confirmar Contraseña</label>
              <Box display="flex" position="relative">
                <input
                  {...register("passwordConfirmation", {
                    required: true,
                    validate: {
                      matchesPreviousPassword: (value) => {
                        const { password } = getValues();
                        return password === value || "Passwords should match!";
                      },
                    },
                  })}
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  className="input"
                  placeholder="Confirmar constraseña"
                  type={`${hideenTwo ? "password" : "text"}`}
                />
                {!hideenTwo ? (
                  <RemoveRedEye
                    onClick={() => setHideenTwo(!hideenTwo)}
                    className="eye"
                  />
                ) : (
                  <VisibilityOff
                    onClick={() => setHideenTwo(!hideenTwo)}
                    className="eye"
                  />
                )}
              </Box>
              {errors.passwordConfirmation &&
                errors.passwordConfirmation.type === "required" && (
                  <ShowAlert name="password" />
                )}
              {errors.passwordConfirmation &&
                errors.passwordConfirmation.type ===
                  "matchesPreviousPassword" && <ShowAlert name="No match" />}
            </InputContainer>
          </Grid>
        </Grid>

        <Box className="">
          {isLoading ? (
            <button className="disabled" type="submit" disabled>
              Cargando...
            </button>
          ) : (
            <button className="btnBox" type="submit">
              Registrarme
            </button>
          )}
        </Box>
        <p className="nohave_account" onClick={() => goToLogin()}>
          Ya tienes una cuenta <span>Inicia sesion aqui</span>
        </p>
      </form>
    </Box>
  );

  return (
    <Container>
      <Hero>
        <NavBarProfile isHome={true} />
        <Wrapper>
          <InputsContainer>
            <Box className="register_title">
              <p>Registro</p>
            </Box>
            {error.error && (
              <Alert variant="filled" severity="error">
                <AlertTitle>Ups! </AlertTitle>
                {error.msg},
                <strong style={{ marginLeft: 2 }}>Intentalo nuevamente</strong>
              </Alert>
            )}
            {renderRegisters()}
          </InputsContainer>
        </Wrapper>
      </Hero>
    </Container>
  );
}

/*
v/ au


*/
