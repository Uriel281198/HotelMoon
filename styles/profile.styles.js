import { Grid } from "@material-ui/core";
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
  background: #f6f6f6;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  @media ${device.md} {
    margin-top: 50px;
  }
`;

export const OptionsBar = styled.div`
  height: 50px;
  background-color: #ffff;
  border-bottom: 2px solid #e0e0e0;
  overflow: hidden;
  /* max-width: 1300px; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin: auto; */

  .option {
    ${flexAlignCenter}
    /* border:1px solid #e0e0e0; */
    height: 100%;
    width: 200px;
    cursor: pointer;
    .icon {
      color: ${colors.primaryColor};
    }
    p {
      /* font-weight:bold; */
      color: #424242;
    }
  }

  .option_selected {
    border-bottom: 3px solid ${colors.primaryColor};
  }
`;

export const CardUser = styled.div`
  /* border: 1px solid green; */
  background: #ffff;
  height: 526px;
  @media ${device.md} {
    height: 520px;
    width: 95%;
  }
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 1px 1px 3px #999;
  .img {
    position: relative;
    .icon {
      font-size: 160px;
    }
    .btn {
      width: 40px;
      height: 40px;
      border: 1px solid #000;
      border-radius: 20px;
      position: absolute;
      top: 10px;
      right: 35px;
      z-index: 10;
      background: #ffff;
      ${flexAlignCenter};
    }
  }
  h1 {
    font-size: 20px;
  }
  .percentaje {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    margin-bottom: 10px;
    .bar {
      width: 240px;
      height: 4px;
      border-radius: 5px;
      background: #4db6ac;
      margin-bottom: 10px;
      margin-top: 10px;
    }
  }

  .birthDay {
    margin-top: 20px;
    display: flex;
    align-items: flex-start;
  }

  .cv {
    color: #03a9f4;
    margin-top: 20px;
  }
`;

export const SubMenu = styled.div`
  .item_menu {
    display: flex;
    align-items: center;
    height: 55px;
    border-bottom: 1px solid #999;
    width: 95%;
    padding-left: 10px;
    cursor: pointer;
    .icon {
      color: #000;
    }

    p {
      color: #000;
      font-weight: bold;
    }
  }

  .select_item_menu {
    background: rgba(55, 208, 156, 0.2);
    border-left: 3px solid ${colors.primaryColor};
    .icon {
      color: ${colors.primaryColor};
    }
    p {
      color: ${colors.primaryColor};
    }
  }
`;
export const CardForm = styled.div`
  box-shadow: 2px 2px 5px #e1e7ff;
  background: #ffff;
  height: 350px;
  padding: 10px;
  margin-bottom: 20px;
  h1 {
    font-size: 20px;
    font-weight: lighter;
  }

  .divider {
    background-color: #e1e7ff;
  }

  .input_container{
    display:flex;
    justify-content:space-between;
  }

  .input {
    border: none;
    background-color: #f5f5f5;
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
      width: 48%;
      margin-bottom: 20px;
      margin-top: 0;
    }
  }

  
  .btnBox {
    /* width: 100%; */
    display: flex;
    justify-content: flex-start;
    align-items: center;

    color: #fff;
    margin-top: 20px;
    /* margin-bottom: 20px; */
    @media ${device.md} {
      width: 120px;
      margin-bottom: 0;
      /* border:1px solid red; */
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

export const OptionLeft = styled.div`
  box-shadow: 2px 2px 5px #e1e7ff;
  background: #ffff;
  height: 200px;
  padding: 10px;
  width: 95%;
  margin-top: 20px;
  h1 {
    font-size: 20px;
    font-weight: lighter;
  }

  .divider {
    background-color: #e1e7ff;
  }
`;

export const GridContainer = styled(Grid)`
  margin-top: 20px;
  padding: 20px;
  .colum-3 {
    .imageContainer {
    }
  }

  .colum-9 {
    /* border: 1px solid pink; */
  }
`;


