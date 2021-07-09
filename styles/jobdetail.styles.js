import { colors, device, sharedProps } from "./gloabal.styles";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const Container = styled.div`
  background-color: #f9f9f9;
`;

export const SocialNetworks = styled.div`
  height: 60px;
  background-color: ${colors.primaryColor};
  display: none;
`;

export const Header = styled.header`
  background-position: top center;
  background-repeat: no-repeat;
  /* max-width: 1300px; */
  background-size: 100% 100%;
  width: 100%;
  margin: auto;
  background-image: url("https://images.unsplash.com/photo-1577412647305-991150c7d163?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");

  @media ${device.md} {
    height: 290px;
  }
  .overlay {
    background: rgba(2, 150, 156, 0.9);
    padding: 80px 10px 40px 10px;
    @media ${device.md} {
      height: 290px;
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
          text-align: left;
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
  }
`;

export const DescriptionSection = styled.section`
  max-width: 1300px;
  margin: auto;
  margin-top: 60px;
  padding: 10px;
`;

export const JobDescription = styled(Grid)`
  ${sharedProps};
  background-color: #fff;
  padding: 50px;
  .description_box {
    h2 {
      font-weight: lighter;
      margin-top: 20px;
    }
    .dividerShort {
      border: 1px solid ${colors.primaryColor};
      width: 15px;
      margin-top: 10px;
      margin-right: 5px;
    }

    .divider {
      border: 1px solid ${colors.primaryColor};
      width: 35px;
      margin-top: 10px;
      margin-right: 10px;
    }

    p {
      margin-top: 10px;
      line-height: 1.5;
      text-align: justify;
      color: #797979;
    }

    .request {
      margin-top: 20px;
      display: flex;
      align-items: flex-end;

      .colorIcon {
        color: #f36969;
      }
      p {
      }
    }
  }
`;

export const OverViewJob = styled(Grid)`
  padding: 0px 15px 10px 15px;
`;

export const JobPopular = styled.div`
  margin-bottom: 22px;
  /* border:1px solid red; */
  background-color: #ffff;
  /* border-bottom: 1px solid ${colors.primaryColor}; */

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
    align-items: center;
    padding: 20px;

    .separation {
      margin-top: 20px;
    }

    .colorIcon {
      color: ${colors.primaryColor};
    }
  }

  .flex_btn {
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    justify-content: center;
    .btn_apply {
      border: none;
      background-color: ${colors.primaryColor};
      color: #ffff;
      border-radius: 15px;
      cursor: pointer;
      width: 70%;
      font-weight: bold;
      height: 40px;
      margin-bottom: 15px;
      &:focus {
        outline: none;
      }
    }
  }

  .detail_job {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 20px;
    padding-left: 100px;
    .row {
      align-items: flex-start;
      margin-bottom: 60px;
      .icon {
        color: ${colors.primaryColor};
        margin-right: 10px;
      }
      .title {
        font-weight: bold;
      }
      .subtitle {
        margin-top: 10px;
        color: #797979;
      }
    }
  }
`;

export const RelatedJobs = styled.section`
  max-width: 1300px;
  margin: auto;
  margin-top: 0px;
  padding: 10px;
  .grid_item {
    /* border: 1px solid red; */
    h2 {
      font-weight: lighter;
      margin-top: 20px;
    }
    .dividerShort {
      border: 1px solid ${colors.primaryColor};
      width: 15px;
      margin-top: 10px;
      margin-right: 5px;
      margin-bottom:20px;
    }
    }

    .divider {
      border: 1px solid ${colors.primaryColor};
      width: 35px;
      margin-top: 10px;
      margin-right: 10px;
      margin-bottom:20px;
    }
    
    .card_job{

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
