import React, {useContext, useEffect, useState} from 'react';
import NavBar from '../components/shared/NavBarProfile';
import CardHotel from '../components/CardHotel';
import Link from 'next/link';
import {Layer, Limiter, TitlesContainer, Searcher} from '../styles/home.styles';
import styled from 'styled-components';
import {Box, Grid, TextField} from '@material-ui/core';
import {Search} from '@material-ui/icons';
import Footer from '../components/shared/Footer/Footer';
import {api} from '../services/api';
import {useRouter} from 'next/router';
import {device} from '../styles/gloabal.styles';
import {userContext} from '../context/userContext';
const Home = () => {
  const {LogoutUser, token_user, userData} = useContext(userContext);

  const router = useRouter();
  const [optionSelect, setOptionSelect] = useState('');
  const [habitaciones, setHabitaciones] = useState([]);
  const [reservaciones, setReservaciones] = useState([]);
  const [email, setemail] = useState('');
  useEffect(() => {
    getInitialData();
  }, [token_user, userData]);

  const getInitialData = () => {
    if (token_user !== null) {
      let constraints = JSON.stringify({
        user: {
          __type: 'Pointer',
          className: '_User',
          objectId: userData.objectId,
        },
      });
      api
        .get(`classes/Reservaciones?where=${constraints}&include=habitacion`)
        .then(res => {
          console.log(res);
          setReservaciones(res.data.results);
        })
        .catch(err => console.log(err));
    }
  };

  const navigate = item => {
    router.push({
      pathname: `/habitacion`,
      query: {id: item.objectId},
    });
  };

  const findReservation = () => {
    if (email === '') {
      alert('Agrega un correo');
    } else {
      api
        .get(
          `classes/Reservaciones?where={"email":"${email}"}&include=habitacion`,
        )
        .then(res => {
          console.log(res);
          setReservaciones(res.data.results);
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div style={{backgroundColor: '#F9F9F9'}}>
      <NavBar isHome={true} />
      <Hero>
        <Title className="title">Mis reservaciones</Title>
      </Hero>
      <ContainerLayout>
        <CenterContent>
          <h1 className="subTitle" style={{textAlign: 'center'}}>
            Tus reservaciones
          </h1>
          <Box className="habitaciones">
            {token_user !== null ? (
              reservaciones.length >= 1 ? (
                reservaciones.map((item, index) => {
                  return (
                    <CardContainer key={index}>
                      <img src={item.habitacion.images[0]} width="80%" />
                      <p className="title">Habitacion{item.habitacion.name}</p>
                      <Box
                        display="flex"
                        justifyContent="center"
                        flexDirection="column"
                        mt={2}>
                        <p className="text">Reservacion por: {item.name}</p>
                        <p className="text">
                          Fecha de llegada: {item.fechallegada}
                        </p>
                        <p className="text">Fehca de salida: {item.fechaida}</p>
                        <p className="text">Noches de estadia: {item.noches}</p>
                        <p className="total">Monto total: ${item.total}</p>
                      </Box>
                      <div
                        className="button"
                        onClick={() => navigate(item.habitacion)}>
                        Ver habitacion
                      </div>
                    </CardContainer>
                  );
                })
              ) : (
                <h1>aun no tienes reservaciones</h1>
              )
            ) : (
              <Box>
                <TextField
                  fullWidth
                  value={email}
                  id="Correo"
                  /* defaultValue={token_user === null ? '' : userData.email} */
                  onChange={e => setemail(e.target.value)}
                  label="Correo"
                  variant="outlined"
                  style={{marginTop: 10}}
                />

                <CustomButton onClick={() => findReservation()}>
                  <p>Buscar reservaciones por correo</p>
                </CustomButton>

                {reservaciones.length >= 1 ? (
                  reservaciones.map((item, index) => {
                    return (
                      <CardContainer key={index}>
                        <img src={item.habitacion.images[0]} width="80%" />
                        <p className="title">
                          Habitacion {item.habitacion.name}
                        </p>
                        <Box
                          display="flex"
                          justifyContent="center"
                          flexDirection="column"
                          mt={2}>
                          <p className="text">Reservacion por: {item.name}</p>
                          <p className="text">
                            Fecha de llegada: {item.fechallegada}
                          </p>
                          <p className="text">
                            Fehca de salida: {item.fechaida}
                          </p>
                          <p className="text">
                            Noches de estadia: {item.noches}
                          </p>
                          <p className="total">Monto total: ${item.total}</p>
                        </Box>
                        <div
                          className="button"
                          onClick={() => navigate(item.habitacion)}>
                          Ver habitacion
                        </div>
                      </CardContainer>
                    );
                  })
                ) : (
                  <h1>Aun no tienes reservaciones</h1>
                )}
              </Box>
            )}
          </Box>
        </CenterContent>
      </ContainerLayout>

      <Footer />
    </div>
  );
};

export default Home;

const CustomButton = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  background-color: #dbb28e;
  padding: 10px 10px 10px 10px;
  color: #fff;
`;
const Title = styled.h1`
  font-size: 42px;
  text-align: center;
  color: #fff;
`;

const ContainerLayout = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: auto;
`;

const CenterContent = styled.div`
  margin: auto;
  width: 90%;
  padding-top: 20px;

  .subTitle {
    font-size: 24px;
  }
  .habitaciones {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    flex-wrap: wrap;
  }
`;

const CardContainer = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 70px 10px 70px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media ${device.md} {
    width: 25%;
  }
  .title {
    font-weight: bold;
    font-size: 20px;
    margin-top: 15px;
    text-align: center;
  }

  .text {
    text-align: justify;
    color: #757575;
  }

  .total {
    text-align: justify;
    color: #424242;
  }
  .box_description {
    padding: 15px 15px 10px 15px;
  }
  .description {
    text-align: left;
    color: #757575;
  }

  .price {
    text-align: center;
    font-weight: bold;
    font-size: 26px;
  }
  .button {
    margin-top: 5px;
    cursor: pointer;
    padding: 10px 12px 10px 12px;
    background-color: #dbb28e;
    color: #ffff;

    &:hover {
      background-color: #ef6c00;
    }
  }
`;
const Hero = styled.div`
  background-position: top center;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-duration: 20s;
  background-size: 120% 100%;
  min-height: 90vh;
  background-image: url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');

  @media ${device.md} {
    min-height: 90vh;
  }
`;
