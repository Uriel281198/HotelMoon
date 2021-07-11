import { Box } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { device } from "../../styles/gloabal.styles";
export default function CardHotel({ name, images, description, onClick }) {
  return (
    <CardContainer>
      <img src={images} width="80%" />
      <p className="title">{name}</p>
      <Box className="box_description">
        <p className="description">{description}</p>
      </Box>
      <div className="button" onClick={() => onClick()}>
        Ver habitacion
      </div>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 70px 10px 70px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  @media ${device.md} {
    width: 28%;
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
