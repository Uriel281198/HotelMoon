import styled, { css } from "styled-components";
import { colors, device } from "./gloabal.styles";

export const Container = styled.div`
  background-position: top center;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1435575653489-b0873ec954e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
`;
export const Hero = styled.div`
  background-color: rgba(69, 90, 100, 0.8);
`;
export const Wrapper = styled.div`
  max-width: 1300px;
  margin: auto;
  @media ${device.md} {
    height: 100vh;
  }
  padding: 20px;
`;
export const Switcher = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  .switch_option {
    width: 20%;
    padding: 10px 15px 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    .p {
      color: #f9f9f9f9;
    }
  }
  .active {
    text-align: center;
    p {
      font-weight: bold;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  label {
    font-size: 13px;
    margin-top: 5px;
    @media ${device.md} {
      margin-top: 20px;
    }
  }
  input {
    /* background-color: #f5f5f5; */
    width: 100%;
    height: 50px;
    border: none;
    padding-left: 15px;
    padding-right: 15px;
    color: #535864;
    border: 1px solid #e0e0e0;
    /* margin-bottom: 40px; */
    &:focus {
      outline: none;
    }
    @media ${device.md} {
      width: 100%;
      margin-bottom: 0px;
    }
  }

  .eye {
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 15px;
  }
`;

export const Columns = styled.div`
  display: flex;
  flex-direction: column;
  ${({ columns }) =>
    columns == 1 &&
    `    
    .column {
    width: 100%;
  }
  @media ${device.md} {
    justify-content: space-between;
    flex-direction: row;
    .column {
      width: 100%;
    }
  }
  `};
  ${({ columns }) =>
    columns == 2 &&
    `    
    .column {
    width: 100%;
  }
  @media ${device.md} {
    justify-content: space-between;
    flex-direction: row;
    .column {
      width: 49%;
    }
  }
  `};
  ${({ columns }) =>
    columns == 3 &&
    `
    .column {
    width: 100%;
  }
  @media ${device.md} {
    justify-content: space-between;
    flex-direction: row;
    .column {
      width: 33%;
    }
  }
  `};
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: auto;
  background-color: white;
  margin-top: 100px;
  padding: 40px 15px 10px 15px;
  .register_title {
    text-align: center;
    margin-bottom: 30px;
    p {
      font-size: 25px;
      font-weight: bold;
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
  .btnBox {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primaryColor};
    color: #fff;
    margin-top: 50px;
    /* margin-bottom: 20px; */
    cursor: pointer;
    @media ${device.md} {
      width: 100%;
      margin-bottom: 0;
    }
    border: none;
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;

export const ErrorBox = styled.div`
  height: 20px;
  span {
    color: red;
  }
`;

export const Input_animation = styled.div`
  position: relative;
  width: 100%;
  height: 44px;
  line-height: 44px;
  /* border:1px solid red; */
  label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: #d3d3d3;
    transition: 0.2s all;
    cursor: text;
  }
  input {
    width: 100%;
    border: 0;
    outline: 0;
    padding: 0.5rem 0;
    border-bottom: 2px solid #d3d3d3;
    box-shadow: none;
    color: #111;
  }
  input:invalid {
    outline: 0;
    // color: #ff2300;
    //   border-color: #ff2300;
  }
  input:focus,
  input:valid {
    border-color: #00dd22;
  }
  input:focus ~ label,
  input:valid ~ label {
    font-size: 14px;
    top: -24px;
    color: #00dd22;
  }
`;
{
  /* <Input_animation className="column">
<input type="text" id="adada" required />
<label for="adada">Your name:</label>
</Input_animation> */
}
