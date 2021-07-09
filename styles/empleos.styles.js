import { Grid, TextField, withStyles } from "@material-ui/core";
import styled, { css } from "styled-components";
import { colors, device } from "./gloabal.styles";

const flexAlignCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const flexAlignCenterColumn = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.div`
  background: #fff;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  background: #ffff;
  margin: auto;
  @media ${device.md} {
    /* margin-top: 50px; */
  }
`;
export const Header = styled.header`
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  margin: auto;
  background-image: url("https://images.unsplash.com/photo-1577412647305-991150c7d163?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");

  @media ${device.md} {
    height: 290px;
  }
  .overlay {
    background: rgba(2, 150, 156, 0.9);
    padding: 80px 10px 80px 10px;
    @media ${device.md} {
      height: 290px;
    }
  }
  .wrapper {
    max-width: 1200px;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      font-size: 32px;
      color: #ffff;
      text-align: center;
      @media ${device.md} {
        text-align: center;
      }
    }
    .back_section {
      display: flex;
      margin-top: 20px;
      p {
        color: #ffffffa6;
      }
      .icon {
        color: #00e676;
      }
    }
  }
`;

export const Inputs_Search = styled.div`
  max-width: 1200px;
  margin: auto;
  height: 140px;
  margin-top: -70px;
  background-color: #fff;
  box-shadow: 0 10px 6px -6px #777;
  /* border: 2px solid ${colors.primaryColor}; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 50px;
  .item_input {
    width: 25%;
    border-bottom: 2px solid ${colors.primaryColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    .input {
      width: 90%;
      color: #000;
    }
  }

  .icon {
    color: ${colors.primaryColor};
  }
  .input {
    width: 30%;
    height: 50px;
    border: none;
    /* padding-left: 15px; */
    /* padding-right: 15px; */
    color: #000;
    /* border-bottom:2px solid ${colors.primaryColor}; */
    margin-bottom: 20px;

    &:focus {
      outline: none;
    }

    ::placeholder {
      color: #000;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #000;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #000;
    }
    @media ${device.md} {
      width: 30%;
      margin-bottom: 0;
      margin-top: 0;
    }
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: "";
  }

  .btn_search {
    height: 40px;
    border: none;
    background-color: ${colors.primaryColor};
    padding-left: 5px;
    border-radius:5px;
    padding-right: 5px;
    color: #fff;
    font-size: 18px;
    margin-top: 10px;
  }
`;

export const SearchContainer = styled(Grid)`
  .card_filters {
    box-shadow: 0 10px 6px -6px #e0e0e0;
    width: 95%;
    .filter {
      height: 50px;
      border-bottom: 1px solid #cfd8dc;
    }
  }
  .filters {
    display: flex;
    margin-bottom: 40px;
    justify-content: space-between;
  }
`;
