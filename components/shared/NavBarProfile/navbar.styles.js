import { ArrowDropDown } from "@material-ui/icons";
import styled from "styled-components";
import { colors, device } from "../../../styles/gloabal.styles";

export const Nav = styled.nav`
  height: 90px;
  width: 100%;
  margin: auto;
  display: flex;
  background:#fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  /* background-color: ${(props) => (props.isHome ? "transparent" : colors.primaryColor)}; */
  /* border: 1px solid #b2dfdb; */
  align-items: center;
  border-bottom: 2px solid ${colors.primaryColor};
  /* border: 1px solid blue; */
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
  padding-right: 5px;
  padding-left: 5px;
  border-radius: 5px;
`;


export const RowWithColor = styled(ArrowDropDown)`
  color: ${colors.primaryColor};
`;
export const DrawerNavigation = styled.div`
    width: 270px;
  padding: 20px;
  padding-top: 100px;
  height: 100vh;
  background-color: #ffff;
  position: fixed;
  z-index: 10;

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
    color: #757575;
    margin-bottom: 20px;
  }
`;

export const LoginCtn = styled.div`
  margin-left: 30px;
  /* border-left: 2px solid gray; */
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
    border-bottom: 2px solid #23c0e9;
  }
`;
export const SelectFlexRow = styled.div`
background-color:${colors.primaryColor};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  transition: "border 1s";
  position: relative;
  border-bottom: 2px solid transparent;  
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #23c0e9;
  }
`;

export const A = styled.p`
  margin-left: 14px;
  font-size: 16px;
  border-spacing: 15px;
  padding-bottom: 5px;
  text-decoration: none;
  color:#000;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border-bottom: 2px solid transparent;
`;
export const LoginButton = styled.a`
  margin-left: 14px;
  font-size: 16px;
  color: #ffff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  /* border-bottom: 2px solid transparent; */
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #ffff;
  }
`;

export const LinksCtn = styled.div`
  display: flex;
  height: 110px;
  align-items: center;
  justify-content: center;
  /* border:1px solid white; */
  @media (max-width: 480px) {
    display: none;
  }
`;

export const StyledBurger = styled.button`
  position: absolute;
  top: 3%;
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
    background: #000;
    /* background-color: #000; */
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

//Menu section
export const MenuProfile = styled.div`
  height: 50px;
  background-color: ${colors.primaryColor};
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* padding-right: 20px; */
  /* padding-left: 20px; */
  border-radius: 5px;
  .first{
    color:#ffff;    
    margin-left:20px;
  }
  .icon{
    color:#ffff;    
    margin-right:20px;
  }
`;


export const ButttonSigup = styled.div``;

export const MenuOption = styled.div`
  border: 1px solid white;
  position: absolute;
  top: 0;
  margin-top: 40px;
  width: 120px;
  height: 120px;
`;
