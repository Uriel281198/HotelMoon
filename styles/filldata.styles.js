import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { colors, device } from "./gloabal.styles";

export const Container = styled.div`
  background: #ffff;
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
  /* 
  background-color: rgba(69, 90, 100, 0.8); */
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  /* height: 100vh; */
  /* padding: 20px; */
  /* border:1px solid red; */
  margin-top: 50px;
`;

export const Stepper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 72px;

  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 72px;
    .number {
      background: #bdbdbd;
      border-radius: 30px;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .divider {
    border: 1px solid ${colors.primaryColor};
    width: 25px;
    height: 2px;
    margin: 0 5px 0 5px;
  }

  .step_select {
    .number {
      background-color: ${colors.primaryColor};
      color: #ffff;
    }
  }

  @media ${device.md} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 320px;
    .divider {
      border: 1px solid ${colors.primaryColor};
      width: 2px;
      height: 45px;
      margin: 0 5px 0 5px;
    }
  }
`;

export const InputsContainer = styled(Grid)`
  /* border:1px solid green; */
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  .miniContainer {
    /* border:1px solid purple; */
  }

  .indications {
    font-size: 22px;
    margin-bottom:20px;    
    color: ${colors.primaryColor};
  }
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

export const ErrorBox = styled.div`
  height: 20px;
  span {
    color: red;
  }
`;

export const NavMenu = styled.div`
  background-color: rgba(0, 150, 136, 0.7);
  height: 80px;

  .content {
    height: 80px;
    max-width: 1300px;
    margin: auto;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    color: #fff;
  }
`;

export const Home = styled.div``;
