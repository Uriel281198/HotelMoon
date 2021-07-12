import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { api } from "../services/api";
import styled from "styled-components";
import Footer from "../components/shared/Footer/Footer";
import NavBarProfile from "../components/shared/NavBarProfile";
import { Box, Container, Grid, TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import moment from "moment";
export default function habitacion() {
  const router = useRouter();
  const [dataHabitacion, setDataHabitacion] = useState({});
  const [images, setImages] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [showAddFilter, setShowAddFilter] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [date1, setdate1] = useState("");
  const [data2, setdata2] = useState("");
  const [total, settotal] = useState(0);
  const [noches, setNoches] = useState(0);
  useEffect(() => {
    console.log(router);
    if (router.query.id === undefined) {
    } else {
      api
        .get(`classes/Habitaciones/${router.query.id}`)
        .then((res) => {
          setDataHabitacion(res.data);
          setImages(res.data.images);
        })
        .catch((err) => console.log(err));
    }
  }, [router]);

  const sendData = () => {
    api
      .post(`classes/Reservaciones`, {
        name: name,
        lastname: lastname,
        email: email,
        habitacion: dataHabitacion.objectId,
        noches: noches,
        total: total,
        fechallegada: date1,
        fechaida: data2,
      })
      .then((res) => {
        console.log("echo");
      })
      .catch((err) => {
        console.log("erro");
      });
  };
  const ViewFilter = () => {
    setShowAddFilter(true);
    setTimeout(() => {
      setShowAddFilter(false);
    }, 2000);
  };

  const calculateDate = () => {
    var admission = moment(date1, "YYYY-MM--DD");
    var discharge = moment(data2, "YYYY-MM--DD");
    let res = discharge.diff(admission, "days");
    setNoches(res);
    settotal(res * dataHabitacion.precio);
    return res;
  };

  return (
    <div>
      <NavBarProfile />
      <Layout>
        <Container
          onClick={() => {
            console.log("conexion de base de datos exitosa");
            console.log(dataHabitacion);
          }}
        >
          <Grid container style={{ marginTop: 30 }} spacing={2}>
            <Grid item xs={12} md={6}>
              <img src={images[0]} />
            </Grid>
            <Grid item xs={12} md={6}>
              <p className="title">{dataHabitacion.name}</p>
              <p className="decription">{dataHabitacion.descripcion}</p>
              <Box mt={2}>
                <p>Numero de personas: {dataHabitacion.personas}</p>
              </Box>

              <Box mt={2}>
                <p>Costo por noche: ${dataHabitacion.precio}</p>
              </Box>
              <div className="button" onClick={() => setOpen(true)}>
                <p>Reservar habitacion</p>
              </div>
            </Grid>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
              mt={5}
              mb={5}
            >
              <h3 style={{ textAlign: "center" }}>Imagenes de la habitacion</h3>
            </Box>
            <Grid
              item
              xs={12}
              md={12}
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              {images.map((item, index) => (
                <img
                  style={{ width: "48%", marginBottom: 20 }}
                  src={item}
                  key={index}
                />
              ))}
            </Grid>
          </Grid>
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Reservacion de {dataHabitacion.name}
            </DialogTitle>
            <DialogContent dividers>
              <TextField
                id="outlined-basic"
                label="Nombre"
                fullWidth
                onChange={(e) => setname(e.target.value)}
                variant="outlined"
                style={{ marginTop: 10 }}
              />
              <TextField
                fullWidth
                id="Apellidos"
                onChange={(e) => setlastname(e.target.value)}
                label="Apellidos"
                variant="outlined"
                style={{ marginTop: 10 }}
              />
              <TextField
                fullWidth
                id="Correo"
                onChange={(e) => setemail(e.target.value)}
                label="Correo"
                variant="outlined"
                style={{ marginTop: 10 }}
              />

              <TextField
                id="date"
                label="Fecha de llegada"
                type="date"
                style={{ marginTop: 10, marginRight: 20 }}
                onChange={(e) => setdate1(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="date"
                label="Fecha de salida"
                type="date"
                style={{ marginTop: 10 }}
                onChange={(e) => {
                  setdata2(e.target.value);
                  console.log(e.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center",
                  padding: 5,
                  backgroundColor: "#1E73BE",
                  width: 150,
                  marginTop: 10,
                  color: "#fff",
                }}
              >
                <p
                  onClick={() => {
                    if (date1 === "" || data2 === "") {
                      alert("selecciona una fecha");
                    } else {
                      calculateDate();
                    }
                  }}
                >
                  Calcular Total
                </p>
              </div>
              <p>Total {total}</p>
              <p>Noches {noches}</p>
            </DialogContent>
            <DialogActions>
              <Button
                autoFocus
                onClick={() => {
                  if (
                    name == "" ||
                    lastname == "" ||
                    email == "" ||
                    noches === 0 ||
                    total === 0
                  ) {
                    alert("completa todo los campos");
                  } else {
                    sendData();
                    handleClose();
                    ViewFilter();
                  } /*  */
                  /*                   calculateDate();
                   */
                  /*
                   */
                }}
                color="primary"
              >
                Reservar
              </Button>
            </DialogActions>
          </Dialog>
          {/* <CustomizedDialogs setOpen={setOpen} open={open} /> */}

          {showAddFilter && (
            <AlertContainer>
              <Alert variant="filled" severity="success">
                Reservacion Realizada
              </Alert>
            </AlertContainer>
          )}
        </Container>
        {/* <Box className="content">
        <p>{dataHabitacion.name} </p>
        </Box> */}
      </Layout>

      <Footer />
    </div>
  );
}

const AlertContainer = styled.div`
  position: fixed;
  top: 50px;
  right: 0;
`;

const Layout = styled.div`
  max-width: 1300px;
  margin: auto;
  .content {
    /*    max-width: 1300px;
    margin: auto; */
  }
  img {
    width: 100%;
  }

  .title {
    font-weight: bold;
    font-size: 25px;
  }
  .decription {
    margin-top: 40px;
    color: #757575;
  }

  .button {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(219, 178, 142, 1);
    padding: 10px 10px 10px 10px;
    color: #ffff;
    font-weight: bold;
  }
`;

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function CustomizedDialogs({ open, setOpen }) {
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Reservacion
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Reservar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
