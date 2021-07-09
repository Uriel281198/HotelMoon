import styled from "styled-components";
import { colors, device } from "./gloabal.styles";

export const Container = styled.div`
  /* background-color:${colors.bacgroundColor}; */
  /* background-color:red; */

  background-position: top center;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1497215842964-222b430dc094?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
`;

export const Hero = styled.div`
  /* rgba(54, 60, 75, 0.5) */
  /* background-image: linear-gradient(
    to right top,
    rgba(0, 150, 136, 0.7),
    rgba(0, 169, 174, 0.7),
    rgba(0, 169, 174, 0.7),
    rgba(0, 188, 212, 0.7),
    rgba(0, 188, 212, 0.7)
  ); */

  background-color: rgba(69, 90, 100, 0.8);
`;

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: auto;
  height: 100vh;
  padding: 20px;
`;
export const Switcher = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  .switch_option {
    /* border: 1px solid red; */
    width: 20%;
    padding: 10px 15px 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    /* border: 1px solid ${colors.primaryColor}; */
    text-align: center;
    .p {
      color: #f9f9f9f9;
    }
  }

  .active {
    text-align: center;
    /* background-color: ${colors.primaryColor}; */

    p {
      font-weight: bold;
    }
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
  background-color: white;
  margin-top: 80px;
  /* border-radius: 15px;   */
  padding: 40px 15px 10px 15px;
  .register_title {
    text-align: center;
    margin-bottom: 20px;
    p {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .input {
    background-color: #f5f5f5;
    width: 100%;
    height: 50px;
    /* border-radius: 15px; */
    border: none;
    padding-left: 15px;
    padding-right: 15px;
    color: #535864;
    margin-bottom: 40px;

    &:focus {
      outline: none;
    }
    @media ${device.md} {
      width: 100%;
      margin-bottom: 40px;
      margin-top: 0;
    }
  }

  .btnBox {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primaryColor};
    color: #fff;
    margin-top:50px;
    /* margin-bottom: 20px; */
    cursor: pointer;
    @media ${device.md} {
      width: 100%;
      margin-bottom: 0;
    }

    .btn_search {
      border: none;
      background-color: transparent;
      color: #fff;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
  }

  .nohave_account {
    color: #000;
    margin-top: 20px;
    font-size: 1rem;
    text-align: center;

    span {
      color: ${colors.primaryColor};
      cursor: pointer;
    }
  }
`;

export const ErrorBox = styled.div`
  height: 20px;
  span {
    color: red;
  }
`;
