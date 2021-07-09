import { ArrowDropDown } from "@material-ui/icons";
import styled from "styled-components";
import { colors, device } from "../../../styles/gloabal.styles";

export const Nav = styled.nav`
  height: ${(props) => (props.isHome ? '118px' : '90px')};
  width: 100%;
  margin: auto;
  display: flex;
  background-color: ${(props) => (props.isHome ? "transparent" : colors.primaryDark)};  
  align-items: center;
  border-bottom: 1px solid #757575;  
`;

export const Wrapper = styled.div`
  display: flex;
  /* border: 1px solid green; */
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  margin: auto;
  justify-content: space-between;
  width: 1500px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border:1px solid red; */

  .logo{
    color:${colors.primaryColor};
    font-size:60px;
  }

  .logo_name{
    margin-left:10px;
    font-weight:bold;
    font-size:18px;
    color: ${(props) => (props.isHome ? "transparent" : "#ffff")};                            
  }
`;

export const Links = styled.div`
  display: none;
  /* border:1px solid blue; */
  @media ${device.md} {
    display: flex;
  }
`;

export const ButtonLogin = styled.div`
  height: 50px;
  background-color: ${colors.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 5px;
`;

export const ButttonSigup = styled.div`
 height: 50px;  
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 5px;
  border:1px solid gray;
  margin-left:10px;

`;

export const MenuOption = styled.div`
  border: 1px solid white;
  position: absolute;
  top: 0;
  margin-top: 40px;
  width: 120px;
  height: 120px;
`;

export const RowWithColor = styled(ArrowDropDown)`
  color: ${(props) => (props.isHome ? colors.primaryColor : colors.primaryColor)};  
`;
export const DrawerNavigation = styled.div`
  width: 320px;
  padding: 20px;
  padding-top: 100px;
  height: 100vh;
  background-color: #ffff;
  position: fixed;
  z-index: 10;
  border: 1px solid red;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  text-align: left;
  padding: 2rem;
  overflow: scroll;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  @media ${device.md} {
    display: none;
  }
  p {
    color: red;
  }
`;

export const LoginCtn = styled.div`
  margin-left: 30px;
  border-left: 2px solid gray;
  padding-left: 10px;
  display: flex;
  align-items: center;
`;
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  transition: "border 1s";
  position: relative;
  border-bottom: 2px solid transparent;
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid ${colors.primaryColor};
  }
`;

export const A = styled.p`
  margin-left: 14px;
  font-size: 16px;
  border-spacing: 15px;
  padding-bottom: 5px;
  text-decoration:none;
  color: ${(props) => (props.isHome ? "#ffff" : "#fff")};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border-bottom: 2px solid transparent;
`;
export const LoginButton = styled.p`
  margin-left: 14px;
  font-size: 16px;
  color: #ffff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border-bottom: 2px solid transparent;
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #ffff;
  }
`;

export const LinksCtn = styled.div`
  display: flex;
  /* height: 110px; */
  align-items: center;
  justify-content: center;
  /* border:1px solid white; */
  @media (max-width: 480px) {
    display: none;
  }
`;

export const StyledBurger = styled.button`
  top: ${(props) => (props.isHome ? "5%" : "3%")};
  position: absolute;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;  
  &:focus {
    outline: none;
  }

  @media ${device.md} {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    /* background: ${({ open }) => (open ? "#EFFFFA" : "#EFFFFA")}; */
    background-color: #fff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
