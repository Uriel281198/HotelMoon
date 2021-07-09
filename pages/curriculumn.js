import { Box, Grid, Paper, TextField, Tooltip } from "@material-ui/core";
import { Description, Clear, PictureAsPdf } from "@material-ui/icons";
import React, { useState } from "react";
import NavBarProfile from "../components/shared/NavBarProfile";
import { Container, OptionsBar, Wrapper } from "../styles/curriculumn.styles";
import { useRouter } from "next/router";
export default function curriculumn() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("")
  return (
    <Container>
      <NavBarProfile />
      <OptionsBar>
        <Box className="option option_selected">
          <Description className="icon" />
          <p>Curriculumn</p>
        </Box>
        <Box className="option" onClick={() => router.push("/profile")}>
          <Description className="icon" />
          <p>Mis datos</p>
        </Box>
        <Box className="option ">
          <Description className="icon" />
          <p>Configuracion</p>
        </Box>
      </OptionsBar>

      <Wrapper>
        <Grid container>
          <Grid item md={4}>
            <form>
              <Box p={2}>
                <label>Informacion de contacto</label>
              </Box>
              <Box display="flex">
                <TextField
                  id="outlined-basic"
                  label="Nombre"
                  name="Nombre"
                  variant="outlined"
                  //   defaultValue={content.education.institution}
                  //   inputRef={register}
                  onChange={(e) => setName(e.target.value)}
                  style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Apellidos"
                  name="Apellidos"
                  variant="outlined"
                  //   defaultValue={content.education.city}
                  //   inputRef={register}
                  onChange={(e)=>setLastName(e.target.value)}
                  style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
                />
              </Box>
              <Box display="flex">
                <TextField
                  id="outlined-basic"
                  label="Nombre"
                  name="Nombre"
                  variant="outlined"
                  //   defaultValue={content.education.institution}
                  //   inputRef={register}
                  // onChange={handleSubmit(onSubmit)}
                  style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Apellidos"
                  name="Apellidos"
                  variant="outlined"
                  //   defaultValue={content.education.city}
                  //   inputRef={register}
                  // onChange={handleSubmit(onSubmit)}
                  style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
                />
              </Box>
              <Box p={2}>
                <label>Educacion</label>
              </Box>
              <TextField
                id="outlined-basic"
                label="Escuela"
                name="Nombre"
                variant="outlined"
                //   defaultValue={content.education.institution}
                //   inputRef={register}
                // onChange={handleSubmit(onSubmit)}
                style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
              />
              <TextField
                id="outlined-basic"
                label="Estudiante de"
                name="Apellidos"
                variant="outlined"
                //   defaultValue={content.education.city}
                //   inputRef={register}
                // onChange={handleSubmit(onSubmit)}
                style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
              />
            </form>
          </Grid>

          <Grid item md={8}>
            <div size="A4">
              <Tooltip title="Delete All Data" placement="right">
                <PictureAsPdf />
              </Tooltip>
              <Paper elevation={5} style={{ width: "21cm", height: "29.7cm" }}>
                <Box display="flex" flexDirection="column" p={5}>
                  <p>{name}</p>
                  <p>{lastName}</p>
                </Box>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Wrapper>
    </Container>
  );
}
