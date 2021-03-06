import { Grid } from "@material-ui/core";
import styled, { keyframes } from "styled-components";
import { colors, device, sharedProps } from "./gloabal.styles";

const HeaderKeyFrame = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

export const Hero = styled.div`
  background-position: top center;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  animation-name: ${HeaderKeyFrame};
  animation-duration: 20s;
  background-size: 120% 100%;
  animation-iteration-count: infinite;
  background-image: url("https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");

  @media ${device.md} {
    min-height: 90vh;
  }
`;

export const Layer = styled.div`
  background: rgba(54, 60, 75, 0.9);
  overflow: hidden;
  height: 100%;
  z-index: 2;

  @media ${device.md} {
    min-height: 90vh;
  }
`;

export const Limiter = styled.div`
  /* border: 1px solid red; */
  /* height: 80vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  padding: 0 15px 0 15px;
  margin: auto;
  @media ${device.md} {
    height: 80vh;
  }
`;

export const TitlesContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .titles {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    .title {
      color: #ffff;
      font-size: 40px;
      font-weight: lighter;
      margin: 0;
      @media ${device.md} {
        font-size: 70px;
      }
    }
    .spColor {
      color: ${colors.primaryColor};
      font-size: 40px;
      margin-right: 2px;
      @media ${device.md} {
        font-size: 70px;
      }
    }
    .subtitle {
      color: #bbbcc2;
      font-size: 20px;
    }
  }

  .badgesContainer {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;

    .icon {
      color: ${colors.primaryColor};
    }
    .searchTop {
      color: #ffff;
      margin-right: 20px;
    }

    .topByOne {
      color: #ffffffcf;
      margin-right: 20px;
      transition: color 1s;
      &:hover {
        cursor: pointer;
        color: ${colors.primaryColor};
      }
    }
  }
`;

export const Searcher = styled.div`
  display: flex;
  flex-direction: column;

  .inputBox {
    background-color: rgba(249, 249, 249, 0.22);
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    padding-bottom: 20px;
    padding-top: 20px;
    @media ${device.md} {
      flex-direction: row;
      justify-content: space-around;
      height: 110px;
      margin-top: 50px;
    }
  }

  .input {
    width: 90%;
    height: 50px;
    border-radius: 15px;
    border: none;
    padding-left: 15px;
    padding-right: 15px;
    color: #535864;
    margin-bottom: 20px;

    &:focus {
      outline: none;
    }
    @media ${device.md} {
      width: 70%;
      margin-bottom: 0;
      margin-top: 0;
    }
  }

  .btnBox {
    height: 50px;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primaryColor};
    border-radius: 15px;
    color: #fff;
    /* margin-bottom: 20px; */
    cursor: pointer;
    @media ${device.md} {
      width: 20%;
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
`;

export const BottomCategories = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .categories {
    background-color: rgba(219, 219, 219, 0.1);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .category {
      border-left: 1px solid gray;
      /* border-right: 1px solid gray; */
      width: 50%;
      display: flex;
      padding: 15px 10px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @media ${device.md} {
        width: 16.66%;
        height: 156px;
      }

      .icon {
        font-size: 2rem;
        margin: 0;
        margin-bottom: 10px;
        color: ${colors.primaryColor};
      }
      .title {
        color: #ffff;
        margin: 0;
        font-weight: bold;
      }
      .subtitle {
        color: #ffffffb8;
        margin: 0;
      }
      &:hover {
        cursor: pointer;
        background-color: #000;
        .ctgIcon {
          color: #ffff;
        }
      }
    }
  }
`;

export const JobsContainer = styled.main`
  /* border: 1px solid red; */
  /* height: 80vh; */
  /* display: flex;
  flex-direction: column; */
  max-width: 1200px;
  /* width:100%; */
  /* padding: 20px 15px 100px 15px; */
  margin: auto;
`;

export const SectionAside = styled.section`
  /* border: 1px solid red; */
  /* height: 80vh; */
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  /* width:100%; */
  padding: 20px 15px 10px 15px;
  margin: auto;
`;

export const SectionJobs = styled.section`
  /* border: 1px solid red; */
  /* height: 80vh; */
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  /* width:100%; */
  padding: 20px 15px 10px 15px;
  margin: auto;

  .filter {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    .title {
      font-weight: bold;
      color: #37474f;
      font-size: 20px;
      .dashed {
        margin-top: 5px;
        width: 30%;
        border-top: 4px solid ${colors.primaryColor};
      }
    }

    .secondHalf {
      margin-top: 20px;

      .option {
        /* background: rgba(54, 60, 75, 0.1); */
        border: 1px solid rgba(54, 60, 75, 0.2);
        height: 50px;
        padding-left: 30px;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: background 0.4s;
        &:hover {
          background: ${colors.primaryColor};
          color: #fff;
        }
      }

      .option-select {
        background: ${colors.primaryColor};
        border: 1px solid rgba(54, 60, 75, 0.2);
        height: 50px;
        padding-left: 30px;
        display: flex;
        align-items: center;
        color: #fff;
        cursor: pointer;
      }

      @media ${device.md} {
        div:nth-child(1) {
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }
        div:nth-child(3) {
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        }
      }
    }
  }

  .loginContainer {
    /* border:1px solid green; */

    .loginLikeEm {
      border-top: 1px solid #e0e0e0;
      border-left: 1px solid #e0e0e0;
      border-right: 1px solid #e0e0e0;
      border-bottom: 1px solid ${colors.primaryColor};
      background-color: #fff;
      height: 350px;
      display: flex;
      padding: 10px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .icon {
        color: ${colors.primaryColor};
        font-size: 40px;
        margin-bottom: 10px;
      }
      .title {
        font-size: 20px;
        margin-bottom: 10px;
        color: #000;
      }
      .description {
        color: #797979;
        margin-bottom: 10px;
        text-align: justify;
      }
      .flex_btn {
        display: flex;
        width: 100%;
        justify-content: center;
        .btn_apply {
          border: none;
          background-color: ${colors.primaryColor};
          color: #ffff;
          border-radius: 15px;
          cursor: pointer;
          width: 40%;
          font-weight: bold;
          height: 40px;
          margin-bottom: 15px;
          &:focus {
            outline: none;
          }
        }
      }
    }

    .loginLikeFind {
      border: 1px solid transparent;
      height: 350px;
      background-position: top center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-image: url("https://images.unsplash.com/photo-1514997130083-2304083899de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");

      .img_overlay {
        height: 350px;
        background: rgba(54, 60, 75, 0.8);
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
    .icon {
      color: ${colors.primaryColor};
      font-size: 40px;
      margin-bottom: 10px;
    }
    .title {
      font-size: 20px;
      margin-bottom: 10px;
      color: #fff;
    }
    .description {
      color: #f5f5f5;
      margin-bottom: 10px;
      text-align: justify;
    }
    .flex_btn {
      display: flex;
      width: 100%;
      justify-content: center;
      .btn_apply {
        border: none;
        background-color: #ff7043;
        color: #ffff;
        border-radius: 15px;
        cursor: pointer;
        width: 40%;
        font-weight: bold;
        height: 40px;
        margin-bottom: 15px;
        &:focus {
          outline: none;
        }
      }
    }
  }

  @media (min-width: 480px) {
    /* padding:0 10px 0 10px; */
  }
  @media (min-width: 1024px) {
    /* width: 16.66%; */
    /* height: 80vh; */
    /* border: 1px solid red; */
    .filter {
      /* border: 1px solid red; */
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      .title {
        font-weight: bold;
        color: #37474f;
        .dashed {
          margin-top: 5px;
          width: 30%;
          border-top: 4px solid ${colors.primaryColor};
        }
      }
      .secondHalf {
        display: flex;
        margin-top: 0px;

        .option {
          /* background: rgba(54, 60, 75, 0.1); */
          border: 1px solid rgba(54, 60, 75, 0.2);
          height: 50px;
          padding-left: 30px;
          padding-right: 30px;
          display: flex;
          align-items: center;
        }

        .option-select {
          background: ${colors.primaryColor};
          border: 1px solid rgba(54, 60, 75, 0.2);
          height: 50px;
          padding-left: 30px;
          padding-right: 30px;
          display: flex;
          align-items: center;
          color: #fff;
        }
      }
    }
  }
`;
export const ItemJob = styled.div`
  /* height: 200px; */
  /* border: 1px solid pink; */
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-left: 3px solid ${colors.primaryColor};
  background-color: #ffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin-bottom: 20px;
  padding: 20px 0 20px 0;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  @media ${device.md} {
    flex-direction: row;
    justify-content: space-between;
  }
  //

  .row_job {
    width: 100%;
    /* border: 1px solid green; */
    display: flex;
    .leftSide {
      /* border: 1px solid green; */
      width: 20%;
      display: flex;
      align-items: flex-start;
      align-items: center;
      justify-content: center;
      padding-top: 20px;

      .img {
        border: 1px solid red;
      }
    }

    .rightSide {
      /* border: 1px solid blue; */
      width: 65%;
      display: flex;
      flex-direction: column;
      /* align-items: center; */
      justify-content: center;
      padding: 20px 0 0 0px;

      .title {
        font-weight: bold;
      }
      .subTitle {
        color: #9a9a9a;
        margin-top: 5px;
      }
      .locationC {
        margin-top: 10px;
      }
      .location {
        color: #9a9a9a;
      }
      .icon {
        color: ${colors.primaryColor};
        margin-left: -5px;
      }
    }
  }

  .actions {
    /* width: 20%; */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    /* border:1px solid red; */

    @media ${device.md} {
      flex-direction: column;
      align-items: flex-start;
    }
    .btn_apply {
      border: none;
      background-color: ${colors.primaryColor};
      color: #ffff;
      cursor: pointer;
      width: 150px;
      height: 30px;
      /* width: 100%; */
      font-weight: bold;
      border-radius: 10px;
      /* margin-right: 15px; */

      &:focus {
        outline: none;
      }

      @media ${device.md} {
        margin-top: 10px;
      }
    }

    .timeJob {
      background-color: #f36969;
      /* width: 150px; */
      height: 30px;
      width: 150px;
      display: flex;
      justify-content: center;
      padding: 5px;
      border-radius: 10px;
      margin-right: 10px;
      p {
        color: #ffff;
      }
    }
  }
`;
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const JobPopular = styled.div`
  margin-bottom: 22px;
  /* border:1px solid red; */
  background-color: #ffff;
  border-bottom: 1px solid ${colors.primaryColor};

  @media (min-width: 1024px) {
    height: 485px;
  }
  .heading {
    /* height:40px; */
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    /* border:1px solid red; */
    height: 45px;
    background-color: ${colors.primaryColor};
    padding: 15px 0 0 10px;
    color: #ffff;
    h4 {
      font-weight: normal;
    }
  }

  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;

    .separation {
      margin-top: 20px;
    }

    .colorIcon {
      color: ${colors.primaryColor};
    }
  }

  .flex_btn {
    display: flex;
    justify-content: center;
    .btn_apply {
      border: none;
      background-color: ${colors.primaryColor};
      color: #ffff;
      border-radius: 15px;
      cursor: pointer;
      width: 40%;
      font-weight: bold;
      height: 40px;
      margin-bottom: 15px;
      &:focus {
        outline: none;
      }
    }
  }
`;

export const JobsByCategory = styled.div`
  margin-bottom: 22px;
  /* border:1px solid red; */
  background-color: #ffff;
  border-bottom: 1px solid ${colors.primaryColor};

  @media (min-width: 1024px) {
    height: 485px;
  }
  .heading {
    /* height:40px; */
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    /* border:1px solid red; */
    height: 45px;
    background-color: ${colors.primaryColor};
    padding: 15px 0 0 10px;
    color: #ffff;
    h4 {
      font-weight: normal;
    }
  }

  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;

    .separation {
      margin-top: 20px;
    }

    .colorIcon {
      color: ${colors.primaryColor};
    }

    .category {
      color: #797979;
      transition: color 1s;
      cursor: pointer;
      &:hover {
        color: ${colors.primaryColor};
      }
    }
  }
  .flex_btn {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    .colorIcon {
      color: ${colors.primaryColor};
    }
    .category_all {
      color: ${colors.primaryColor};
    }
  }
`;

export const NumbersSection = styled.section`
  /* border:1px solid red; */
  padding: 20px 15px 10px 15px;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  justify-content: space-around;
  margin: auto;
  @media ${device.md} {
    flex-direction: row;
  }
  .item_count {
    height: 200px;
    background-color: ${colors.primaryColor};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bg_dark {
    background-color: #28bf8d;
  }

  .count {
    color: #fff;
    font-size: 50px;
    font-weight: bold;
  }
`;

export const BestSection = styled.section`
  max-width: 1200px;
  margin: auto;
  .heading {
    ${sharedProps};
    h4 {
      font-size: 20px;
    }
  }

  .container {
    ${sharedProps};
    display: flex;
    flex-direction: column;
  }
  .row {
    display: flex;
    flex-direction: column;
    width: 100%;
    @media ${device.sm} {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 10px;
    }
  }
  .item_offer {
    border-bottom: 1px solid ${colors.primaryColor};
    background-color: #ffff;
    height: 175px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-bottom: 15px;
    width: 100%;

    @media ${device.sm} {
      width: 32%;
    }
    .icon {
      color: ${colors.primaryColor};
      font-size: 40px;
    }
    .info {
      h4 {
        font-size: 20px;
        font-weight: lighter;
      }
      p {
        color: #797979;
        margin-top: 10px;
      }
    }

    @media ${device.sm} {
      /* width: 50%; */
    }
  }
`;

export const PaymentSection = styled.section`
  padding-top: 50px;
  text-align: center;
  border: 1px solid red;
  h3 {
    font-size: 40px;
    font-weight: lighter;
  }

  .payments_container {
    max-width: 1200px;
    margin: auto;
    ${sharedProps};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 40px;

    @media ${device.sm} {
      flex-direction: row;
    }

    .item_pay {
      border: 2px solid #9e9e9e;
      height: 700px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #fff;
      margin-bottom: 20px;
      @media ${device.sm} {
        width: 31%;
      }

      .heading {
        height: 200px;
        width: 100%;
        position: relative;
        border-bottom: 1px solid #9e9e9e;
        display: flex;
        justify-content: center;
        align-items: center;
        .price {
          position: absolute;
          bottom: -60px;
          background-color: #23c0e9;
          width: 120px;
          height: 120px;
          border-radius: 38px;
          transform: rotate(45deg);
          display: flex;
          justify-content: center;
          align-items: center;

          .price_number {
            transform: rotate(-45deg);
            color: #ffff;
            font-size: 22px;
            font-weight: bold;
          }
        }
        .bg_green {
          background-color: #37d09c;
        }
        .bg_red {
          background-color: #f36969;
        }

        h4 {
          font-size: 20px;
          font-weight: lighter;
        }
      }

      .features {
        height: 400px;
        width: 100%;
        padding: 80px 0 0 20px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        .divider {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          /* border:1px solid red; */
        }
        p {
          margin-left: 10px;
        }
      }

      .action {
        height: 100px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        /* ${centerContent}; */
        padding: 50px;
        .btn_apply {
          border: none;
          background-color: #0e1427;
          color: #ffff;
          border-radius: 15px;
          cursor: pointer;
          width: 100%;
          font-weight: bold;
          height: 40px;
          &:focus {
            outline: none;
          }
          &:hover {
            background: ${colors.primaryColor};
          }
        }
      }
    }
  }
`;

export const AppSection = styled.section`
  border: 1px solid red;
  /* height: 600px; */
  /* max-width:1300px; */
  margin: auto;
  border: 1px solid transparent;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");

  .img_overlay {
    background: rgba(55, 208, 156, 0.8);
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;

    @media ${device.md} {
      flex-direction: row-reverse;
      height: 680px;
    }

    .info {
      /* border: 1px solid white; */
      margin-bottom: 10px;
      ${sharedProps};
      @media ${device.md} {
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
      h4 {
        /* font-weight:lighter; */
        font-size: 44px;
        color: #fff;
      }
      p {
        color: #fff;
        font-size: 18px;
      }
      .btns_content {
        display: flex;
        width: 100%;
        /* border:1px solid white; */
        justify-content: center;
        align-items: center;
        flex-direction: column;

        @media ${device.md} {
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
        }
        .btn_apply {
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background-color: #fff;
          color: #000;
          border-radius: 15px;
          cursor: pointer;
          width: 40%;

          height: 40px;
          margin-top: 15px;

          @media ${device.md} {
            margin-right: 15px;
          }
          &:focus {
            outline: none;
          }

          .btn {
            background-color: transparent;
            border: none;
            /* border:1px solid red; */
            font-weight: bold;
            &:focus {
              outline: none;
            }
          }
        }
      }
    }

    .photoapp {
      /* border: 1px solid red; */
      overflow: hidden;
      display: flex;
      justify-content: center;
      @media ${device.md} {
        ${sharedProps}
      }

      .img {
        margin-bottom: -150px;
        /* width:250px;         */
        /* margin-top:150px;         */

        @media ${device.md} {
          width: 300px;
          margin-bottom: 0px;
        }
      }
    }
  }
`;

// border: 1px solid transparent;
// height: 350px;
// background-position: top center;
// background-repeat: no-repeat;
// background-size: 100% 100%;
// background-image: url("https://images.unsplash.com/photo-1514997130083-2304083899de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");

export const GridLayout = styled(Grid)`
  /* border:3px solid green; */
  margin-bottom: 10px;
`;

export const Description = styled.main`
  border: 1px solid blue;
  

  .description_container{
    max-width:1200px;
    height:800px;
    margin:auto;
    border: 1px solid green; 

    .item_one{
      border: 1px solid red;
    }

    .item_two{
      border: 1px solid red;
    }
  }
`;
