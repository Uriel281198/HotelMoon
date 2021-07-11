import { Box, Grid } from "@material-ui/core";
import React, { useContext, useState } from "react";
import NavBar from "../components/shared/NavBar";
import { useRouter } from "next/router";
import {
  ArrowBack,
  Drafts,
  RemoveRedEye,
  VisibilityOff,
} from "@material-ui/icons";
import {
  Container,
  InputsContainer,
  InputContainer,
  Wrapper,
  Hero,
  ForgotPassword,
  EmailSend,
} from "../styles/login.styles";

import { useForm } from "react-hook-form";
import ShowAlert from "../components/AlertWrong";
import { api } from "../services/api";
import { userContext } from "../context/userContext";
import { Alert, AlertTitle } from "@material-ui/lab";

export default function registro() {
  const { LoginUser } = useContext(userContext);
  const [hidden, changeHidden] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [error, handleError] = useState({
    msg: "",
    error: false,
  });
  const [viewReset, setViewReset] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const goToLogin = () => {
    router.push("/registro");
  };

  const ShowWarning = (msg, error) =>
    handleError({
      msg,
      error,
    });

  const handleLogin = async (formData) => {
    setLoading(true);
    api
      .post(`login?username=${formData.email}&password=${formData.password}`)
      .then((res) => {
        if (res.data.type === "candidate") {
          LoginUser(res.data);
          router.push("/");
        } else {
          router.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
        ShowWarning("El correo o contraseña no coinciden", true);
      })
      .finally(() => setLoading(false));
  };

  const RenderForm = () => (
    <Box>
      <Box className="register_title">
        <p>Inicia sesion en Hotel magic moon</p>
      </Box>
      <form onSubmit={handleSubmit(handleLogin)} autoComplete="off">
        <Grid container>
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
                placeholder="Ej. urie_sic@tesco.edu.mx "
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
                  })}
                  id="password"
                  name="password"
                  className="input"
                  placeholder="*****"
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
                    style={{
                      position: "absolute",
                      right: 15,
                      top: 15,
                    }}
                  />
                )}
              </Box>
              {errors.password && errors.password.type === "required" && (
                <ShowAlert name="password" />
              )}
            </InputContainer>
          </Grid>
        </Grid>

        <Box className="">
          {isLoading ? (
            <button className="disabled" type="submit" disabled>
              Iniciando sesion....
            </button>
          ) : (
            <button className="btnBox" type="submit">
              Iniciar sesion
            </button>
          )}
        </Box>

        <p className="nohave_account" onClick={() => goToLogin()}>
          ¿Aún no tienes una cuenta?
          <span>crea una aquí</span>
        </p>
      </form>
    </Box>
  );

  const RenderResetPassword = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const resetPassword = (data) => {
      api
        .post(`requestPasswordReset`, data)
        .then((res) => setShowEmail(true))
        .catch((err) => console.log(err));
    };

    const backToLogin = () => {
      setViewReset(false);
      setShowEmail(false);
    };

    return (
      <Box>
        {showEmail ? (
          <EmailSend>
            <Box className="back_button">
              <ArrowBack className="back_icon" onClick={() => backToLogin()} />
              <p onClick={() => backToLogin()}>Regresar</p>
            </Box>
            <Box className="content">
              <Drafts className="icon_mail" />
              <p>Correo enviado correctamente para restablecer tu contraseña</p>
              <p className="spam">Verifica la carpeta de spam</p>
            </Box>
          </EmailSend>
        ) : (
          <form onSubmit={handleSubmit(resetPassword)} autoComplete="off">
            <Box className="register_title">
              <p>
                Ingresa tu correo de <span className="resalt">CVJOBS</span> para
                restablecer tu contraseña
              </p>
            </Box>
            <Grid container>
              <Grid item xs={12} md={12}>
                <InputContainer className="column">
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
                    placeholder="Ej. cvjobs@cvjobs.mx "
                  />
                  {errors.email && errors.email.type === "required" && (
                    <ShowAlert name="Correo" />
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <ShowAlert name="pattern" />
                  )}
                </InputContainer>
              </Grid>
            </Grid>

            <Box className="">
              {isLoading ? (
                <button className="disabled" type="submit" disabled>
                  Iniciando sesion....
                </button>
              ) : (
                <button className="btnBox" type="submit">
                  Recuperar contraseña
                </button>
              )}
            </Box>

            <p className="nohave_account" onClick={() => setViewReset(false)}>
              ¿Ya tienes en mente tu contraseña?
              <span>Intentar nuevamente</span>
            </p>
          </form>
        )}
      </Box>
    );
  };

  return (
    <Container>
      <Hero>
        <NavBar isHome={true} />
        <Wrapper>
          <InputsContainer>
            {error.error && (
              <Alert severity="error">
                <AlertTitle>Ups! </AlertTitle>
                {error.msg},
                <strong
                  style={{
                    marginLeft: 2,
                  }}
                >
                  Intentalo nuevamente
                </strong>
              </Alert>
            )}
            {viewReset ? <RenderResetPassword /> : <RenderForm />}
          </InputsContainer>
        </Wrapper>
      </Hero>
    </Container>
  );
}

/*
v/ au


*/
