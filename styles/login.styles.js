import styled from "styled-components";
import { colors, device } from "./gloabal.styles";

export const Container = styled.div`
  background-position: top center;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80");
`;

export const Hero = styled.div`
  background-color: rgba(219, 178, 142, 0.3);
`;

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: auto;
  height: 120vh;
  padding: 20px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: auto;
  background-color: white;
  margin-top: 80px;
  padding: 35px 15px 35px 15px;
  .register_title {
    text-align: center;
    margin-bottom: 20px;
    p {
      font-size: 20px;
      font-weight: bold;
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

  .disabled {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
    background-color: #616161;
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
  .resalt {
    color: ${colors.primaryColor};
  }
`;

export const ErrorBox = styled.div`
  height: 20px;
  span {
    color: red;
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

export const ForgotPassword = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  p {
    color: ${colors.primaryColor};
    cursor: pointer;
  }
`;

export const EmailSend = styled.div`
  position: relative;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    margin: auto;
    margin-top: 60px;
    margin-bottom: 60px;

    p {
      font-weight: bold;
      text-align: center;
      font-size: 20px;
    }
    .spam {
      text-align: center;
      font-weight: normal;
      font-size: 16px;
    }
  }

  .icon_mail {
    color: ${colors.primaryColor};
    font-size: 85px;
  }

  .back_button {
    display: flex;
    align-items: center;

    .back_icon {
      color: ${colors.primaryColor};
      cursor: pointer;
    }

    p {
      margin-bottom: 3px;
      cursor: pointer;
    }
  }
`;
