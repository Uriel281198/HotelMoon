import React, {useEffect, useState} from 'react';
import NavBar from '../components/shared/NavBarProfile';
import CardHotel from '../components/CardHotel';
import Link from 'next/link';
import {
  Hero,
  Layer,
  Limiter,
  TitlesContainer,
  Searcher,
} from '../styles/home.styles';
import styled from 'styled-components';
import {Box, Grid} from '@material-ui/core';
import {Search} from '@material-ui/icons';
import Footer from '../components/shared/Footer/Footer';
import {api} from '../services/api';
import {useRouter} from 'next/router';
import {device} from '../styles/gloabal.styles';
const Home = () => {
  const router = useRouter();
  const [optionSelect, setOptionSelect] = useState('');
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    getInitialData();
  }, []);

  const getInitialData = () => {
    api
      .get('classes/Habitaciones')
      .then(res => setHabitaciones(res.data.results))
      .catch(err => console.log(err));
  };

  const navigate = item => {
    router.push({
      pathname: `/habitacion`,
      query: {id: item.objectId},
    });
  };

  return (
    <div style={{backgroundColor: '#F9F9F9'}}>
      <Hero>
        <NavBar isHome={true} />
        <Title className="title">Hotel Magic Moon</Title>
      </Hero>
      <ContainerLayout>
        <CenterContent>
          <h1 className="subTitle" style={{textAlign: 'center'}}>
            Las Mejores Habitaciones en un solo lugar
          </h1>
          <Box className="habitaciones">
            {habitaciones.map((item, index) => {
              return (
                <CardContainer>
                <img src={item.images[0]} width="80%" />
                <p className="title">{item.name}</p>
                <Box className="box_description">
                  <p className="description">{item.descripcion}</p>
                </Box>
                <Box>
                  <p className="price">$ {item.precio}</p>
                  <p className="people">Numero de personas {item.personas}</p>
                </Box>
                <div className="button" onClick={() => onClick()}>
                  Ver habitacion
                </div>
              </CardContainer>
              );
            })}
          </Box>
        </CenterContent>
      </ContainerLayout>

 
      <Footer />
    </div>
  );
};

export default Home;


const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  margin-top: 30px;
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
  width: 90%;
  @media ${device.md} {
    width: 25%;
  }
  .title {
    font-weight: bold;
    font-size: 20px;
    margin-top: 15px;
    text-align: center;
  }
  .box_description {
    padding: 15px 15px 10px 15px;
  }
  .description {
    text-align: justify;
    color: #757575;
  }

  .price{
    text-align: center;
    font-weight: bold;
    font-size: 26px;
  }
  .button {
    cursor: pointer;
    padding: 10px 12px 10px 12px;
    background-color: #dbb28e;
    color: #ffff;

    &:hover {
      background-color: #ef6c00;
    }
  }
`;
 