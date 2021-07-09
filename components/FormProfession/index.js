import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { colors, device } from "../../styles/gloabal.styles";
const FormProfession = ({ registerUser }) => {
  // const { handleSubmit, registerUser, register, errors } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { nameschool, lastlevel, title, endyear } = errors;

  const [years, setYears] = useState([]);


  useEffect(()=> {  
    getDates();
  },[])

  const getDates = () => {
    let years = [];
    let date = new Date();
    let FinalYear = date.getFullYear();
    for (let i = 1900; i <= FinalYear; i++) {
      years.push(i);
    }
    setYears(years.reverse());
  };

  return (
    <Form onSubmit={handleSubmit(registerUser)}>
      <TwoColumns>
        <Box className="input_container">
          <Wrong>
            {lastlevel && lastlevel.type === "required" && (
              <span>El campo ultimo grado de estudios es requerido</span>
            )}
          </Wrong>
          <select {...register("lastlevel")} name="lastlevelse" id="slct">
            <option disabled>Ultimo grado de estudios</option>

            <option value="1">Primaria</option>
            <option value="2">Secundaria</option>
            <option value="3">Preparatoria</option>
            <option value="3">Universidad</option>
            <option value="3">Maestria</option>
          </select>
        </Box>

        <Box className="input_container">
          <Wrong>
            {nameschool && nameschool.type === "required" && (
              <span>El campo nombre de la escuela es requerido</span>
            )}
            {nameschool && nameschool.type === "minLength" && (
              <span>Minimo 5 caracteres </span>
            )}
          </Wrong>
          <input
            {...register("nameschool", { required: true, minLength: 5 })}
            id="nameschool"
            type="text"
            name="nameschool"
            className="input"
            placeholder="Nombre de la escuela"
          />
        </Box>
      </TwoColumns>
      <TwoColumns>
        <Box className="input_container">
          <Wrong>
            {title && title.type === "required" && (
              <span>El campo ultimo grado de estudios es requerido</span>
            )}
            {title && title.type === "minLength" && (
              <span>Minimo 5 caracteres </span>
            )}
          </Wrong>
          <input
            {...register("title", { required: true, minLength: 5 })}
            id="title"
            type="text"
            name="title"
            className="input"
            placeholder="Egresaste como"
          />
        </Box>

        <Box className="input_container">
          <Wrong>
            {endyear && endyear.type === "required" && (
              <span>El campo nombre de la escuela es requerido</span>
            )}
          </Wrong>
          <select {...register("endyear")} name="endyear" id="endyear">
            <option disabled>Año de termino</option>
            {years.map((item, index) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Box>
      </TwoColumns>
      <Box className="btnBox">
        <button className="btn_search" type="submit">
          Guardar
        </button>
      </Box>
    </Form>
  );
};

export default FormProfession;

const Wrong = styled.div`
  height: 25px;
  span {
    color: #d32f2f;
  }
`;

const TwoColumns = styled.div`
  @media ${device.md} {
    display: flex;

    .input_container {
      width: 50%;
    }
  }
`;

const Form = styled.form`
  .input {
    border: none;
    background-color: #ffff;
    padding-left: 15px;
    /* border-bottom:2px solid #bdbdbd; */
    width: 100%;
    height: 50px;
    padding-right: 15px;
    color: #535864;
    /* margin-bottom: 40px; */
    &:focus {
      outline: none;
    }

    @media ${device.md} {
      width: 90%;
      margin-bottom: 10px;
      margin-top: 0;
    }
  }

  select {
    height: 50px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    padding-left: 15px;
    width: 100%;
    color: #535864;
    box-shadow: none;
    border: 0 !important;
    background-color: #f5f5f5;
    background-image: none;

    @media ${device.md} {
      width: 90%;
    }
  }

  .btnBox {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    color: #fff;
    margin-top: 20px;
    /* margin-bottom: 20px; */
    @media ${device.md} {
      width: 100%;
      margin-bottom: 0;
    }

    .btn_search {
      height: 50px;
      padding: 0 20px 0 20px;
      border: none;
      background-color: ${colors.primaryColor};
      color: #fff;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
  }
`;
//Styles of Form Education
