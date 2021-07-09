import { Box, Divider, Grid } from "@material-ui/core";
import React from "react";
import NavBar from "../../components/shared/NavBar";
import {
  Container,
  InputsContainer,
  Switcher,
  Wrapper,
  Hero,
  ErrorBox,
  NavMenu,
  Stepper,
  Example,
} from "../../styles/filldata.styles";
import { useForm } from "react-hook-form";
import FormEducation from "../../components/FormEducation/index.js";
import FormInfoUser from "../../components/FormInfoUser/index.js";
import axios from "axios";
import Footer from "../../components/shared/Footer/Footer";

export default function FillData() {
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
    formState: { errors },
  } = useForm();

  const {
    register2,
    handleSubmit2,
    formState: { errors2 },
  } = useForm();

  const registerUser = (formData) => {
    alert(JSON.stringify(formData));
    console.log(formData);
  };

  const handleInfoUser = (formData) => {
    alert(JSON.stringify(formData));
    console.log(formData);
  };

  return (
    <Container>
      <NavBar />
      {/* <NavMenu>
        <Box className="content">
          <h3>Completa tu cuenta en tres pasos (1 / 3) </h3>
        </Box>
      </NavMenu> */}
      <Wrapper>
        <Grid container style={{ padding: 20 }}>
          <Grid item xs={12} md={2}>
            <Stepper>
              <Box className="step step_select">
                <Box className="number">
                  <p>1</p>
                </Box>
                <p>Informacion personal </p>
              </Box>
              <div className="divider" />
              <Box className="step">
                <Box className="number">
                  <p>2</p>
                </Box>
                <p>Experiencia </p>
              </Box>
              <div className="divider" />
              <Box className="step">
                <Box className="number">
                  <p>2</p>
                </Box>
                <p>Educacion </p>
              </Box>
            </Stepper>
          </Grid>
          <InputsContainer xs={12} item md={10}>
            <Box className="miniContainer">
              <p className="indications">Informacion de conctacto</p>
              <FormInfoUser
                handleSubmit={handleSubmit}
                register={register}
                registerUser={handleInfoUser}
                errors={errors}
              />
              <Divider style={{ height: 40, background: "transparent" }} />
              <p className="indications">Expericencia</p>
              <FormEducation
                handleSubmit={handleSubmit}
                register={register}
                registerUser={registerUser}
                errors={errors}
              />
              <Divider style={{ height: 40, background: "transparent" }} />
              <p className="indications">Educacion</p>
              <FormEducation
                handleSubmit={handleSubmit}
                register={register}
                registerUser={registerUser}
                errors={errors}
              />
            </Box>
          </InputsContainer>
        </Grid>
      </Wrapper>
      {/* </Hero> */}
      <Footer/>
    </Container>
  );
}
