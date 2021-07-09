import { Box, Divider, Grid, TextField } from "@material-ui/core";
import {
  AccountBox,
  CameraAlt,
  Description,
  Person,
  PersonOutline,
  Receipt,
} from "@material-ui/icons";
import {
  CardUser,
  CardForm,
  Container,
  GridContainer,
  OptionsBar,
  Wrapper,
  SubMenu,
  OptionLeft,
} from "../styles/profile.styles";

import React, { useRef, useState } from "react";
import NavBarProfile from "../components/shared/NavBarProfile";
import FormEducation from "../components/FormEducation";
import { renderToString } from "react-dom/server";
import { colors } from "../styles/gloabal.styles";
import { useRouter } from "next/router";
export default function dashboard() {
  const inputClick = useRef(null);
  const router = useRouter();
  const [viewForm, ChangeView] = useState(false);
  const toogleView = () => {
    ChangeView(!viewForm);    
  };


  return (
    <Container>
      <NavBarProfile />
      <OptionsBar>
        <Box className="option" onClick={() => router.push("/curriculumn")}>
          <Description className="icon" />
          <p>Curriculumn</p>
        </Box>
        <Box className="option option_selected">
          <Description className="icon" />
          <p>Mis datos</p>
        </Box>
        <Box className="option ">
          <Description className="icon" />
          <p>Configuracion</p>
        </Box>
      </OptionsBar>
      <Wrapper>
        <GridContainer container>
          <Grid className="colum-3" item xs={12} md={3}>
            <CardUser>
              <Box className="img">
                <Person className="icon" />
                <div className="btn">
                  <CameraAlt onClick={() => inputClick.current.click()} />
                  <input
                    margin="normal"
                    variant="outlined"
                    type="file"
                    ref={inputClick}
                    hidden="hidden"
                  />
                </div>
              </Box>
              <h1>ADRIANA CAROLINA</h1>
              <Box className="percentaje">
                <div className="bar" />
                <p>45%</p>
              </Box>
              <p className="email">adrianacarolinaoff@gmail.com</p>
              <Box className="birthDay">
                <p>18/Marzo/2001</p>
              </Box>
              <p className="cv">Descargar cv en pdf</p>
            </CardUser>
            <OptionLeft></OptionLeft>
          </Grid>
          <Grid item md={9}>
            {viewForm ? (
              <CardForm>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <h1>Informacion de contacto</h1>
                  <p
                    style={{ color: colors.primaryColor, cursor: "pointer" }}
                    onClick={() => toogleView()}
                  >
                    Editar Informacion
                  </p>
                </Box>
                <Divider className="divider" />
                <Box p={2}>
                  <p>Agregar informacion personal</p>
                </Box>
              </CardForm>
            ) : (
              <CardForm>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <h1 style={{ marginBottom: 10 }}>Informacion de contacto</h1>
                  <p
                    style={{ color: colors.primaryColor, cursor: "pointer" }}
                    onClick={() => toogleView()}
                  >
                    Editar Informacion
                  </p>
                </Box>
                <Box className="input_container">
                  <input
                    id="outlined-basic"
                    placeholder="Nombre"
                    className="input"
                    name="Nombre"
                    variant="outlined"
                    //   defaultValue={content.education.institution}
                    //   inputRef={register}
                    // onChange={handleSubmit(onSubmit)}
                    style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
                  />
                  <input
                    id="title"
                    type="text"
                    name="title"
                    className="input"
                    placeholder="Apellidos"
                  />
                </Box>
                <Box className="input_container">
                  <input
                    id="title"
                    type="text"
                    name="title"
                    className="input"
                    placeholder="Correo"
                  />
                  <input
                    id="title"
                    type="text"
                    name="title"
                    className="input"
                    placeholder="Edad"
                  />
                </Box>

                <Box className="input_container">
                  <input
                    id="title"
                    type="text"
                    name="title"
                    className="input"
                    placeholder="Fecha de nacimiento"
                  />
                  <input
                    id="title"
                    type="text"
                    name="title"
                    className="input"
                    placeholder="Telefono"
                  />
                </Box>

                <Box display="flex">
                  <Box className="btnBox">
                    <button className="btn_search" type="submit">
                      Guardar
                    </button>
                  </Box>

                  <Box className="btnBox">
                    <button className="btn_search" type="submit">
                      Cancelar
                    </button>
                  </Box>
                </Box>
              </CardForm>
            )}

            <CardForm>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <h1>Educacion</h1>
                <p style={{ color: colors.primaryColor }}>Editar Informacion</p>
              </Box>
              <Divider className="divider" />
              <Box p={2}>
                <p>Agregar informacion personal</p>
              </Box>
            </CardForm>
            <CardForm>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <h1>Informacion de contacto</h1>
                <p style={{ color: colors.primaryColor }}>Editar Informacion</p>
              </Box>
              <Divider className="divider" />
              <Box p={2}>
                <p>Agregar informacion personal</p>
              </Box>
            </CardForm>
          </Grid>
        </GridContainer>
      </Wrapper>
    </Container>
  );
}
