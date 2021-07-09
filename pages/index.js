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
import { Box, Grid } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import Footer from "../components/shared/Footer/Footer";
import { api } from "../services/api";
import { useRouter } from "next/router";
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

  const navigate = item => {
    router.push({
      pathname: `/habitacion`,
      query: {id: item.objectId},
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
                <h1 className="title">Hotel Magic Moon</h1>
                <p className="subtitle"></p>
              </Box>
              <Searcher>
                <Box className="btnBox">
                  <Link href="/empleos/search">
                    <a className="btn_search">Empezar a reservar</a>
                  </Link>
                </Box>
              </Searcher>
            </TitlesContainer>
          </Limiter>
        </Layer>
      </Hero>
      <Box mt={5}>
        <h1 style={{ textAlign: "center" }}>
          Las Mejores Habitaciones en un solo lugar
        </h1>
        <Box
          display="flex"
          justifyContent="space-between"
          mt={5}
          flexWrap="wrap"
        >
          {habitaciones.map((item, index) => {
            return (
              <CardHotel
                name={item.name}
                description={item.descripcion}
                images={item.images}
                onClick={()=>navigate(item)}
              />
            );
          })}
        </Box>
      </Box>
      {/* 
      <Footer/> */}
    </div>
  );
};

export default Home;
