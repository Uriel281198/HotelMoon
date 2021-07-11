import React, { useEffect, useState } from "react";
import NavBar from "../components/shared/NavBar";
import CardHotel from "../components/CardHotel";
import Link from "next/link";
import {
  Hero,
  Layer,
  Limiter,
  TitlesContainer,
  Searcher,
} from "../styles/home.styles";
import styled from "styled-components";
import { Box, Grid } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import Footer from "../components/shared/Footer/Footer";
import { api } from "../services/api";
import { useRouter } from "next/router";
import { device } from "../styles/gloabal.styles";
const Home = () => {
  const router = useRouter();
  const [optionSelect, setOptionSelect] = useState("");
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    getInitialData();
  }, []);

  const getInitialData = () => {
    api
      .get("classes/Habitaciones")
      .then((res) => setHabitaciones(res.data.results))
      .catch((err) => console.log(err));
  };

  const navigate = (item) => {
    router.push({
      pathname: `/habitacion`,
      query: { id: item.objectId },
    });
  };

  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <Hero>
        <Layer>
          <NavBar isHome={true} />
          <Limiter>
            <TitlesContainer>
              <Box className="titles">
                <Title className="title">Hotel Magic Moon</Title>
                <p className="subtitle">
                  Nuestro objetivo es sencillo: su satisfacción absoluta.
                </p>
              </Box>
              <Searcher>
                <Box className="btnBox">
                  <Link href="/empleos/search">
                    <a className="btn_search">Adquirir a reservar</a>
                  </Link>
                </Box>
              </Searcher>
            </TitlesContainer>
          </Limiter>
        </Layer>
      </Hero>
      <ContainerLayout>
        <CenterContent>
          <h1 className="subTitle" style={{ textAlign: "center" }}>
            Las Mejores Habitaciones en un solo lugar
          </h1>
          <Box className="habitaciones">
            {habitaciones.map((item, index) => {
              return (
                <CardHotel
                  key={index}
                  name={item.name}
                  description={`${item.descripcion.slice(0, 130)} ...`}
                  images={item.images}
                  onClick={() => navigate(item)}
                />
              );
            })}
          </Box>
        </CenterContent>
      </ContainerLayout>

      <RestaurantsContainer>
        <div className="banner_restaurant">
          <div className="text_container">
            <p>
              No solo las mejores habitaciones si no tambien los mejores
              restaurantes
            </p>
          </div>
        </div>
      </RestaurantsContainer>
      <Footer />
    </div>
  );
};

export default Home;

const RestaurantsContainer = styled.div`
  padding-top: 20px;
  .banner_restaurant {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-position: top center;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    animation-duration: 20s;
    animation-iteration-count: infinite;
    margin-top: 20px;
    background-image: url("https://resizer.otstatic.com/v2/photos/wide-huge/2/26220160.jpg");
    .text_container {
      background-color: rgba(219, 178, 142, 0.8);
      padding: 10px;
    }
    p {
      color: #fff;
      @media ${device.md} {
        font-size: 30px;
      }
    }
    @media ${device.md} {
      height: 400px;
    }
  }
`;
const Title = styled.h1`
  font-size: 32px;
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
