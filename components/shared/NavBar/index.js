import { Box, Link, Menu, MenuItem } from "@material-ui/core";
import {
  AccountCircle,
  ChatBubble,
  HomeWork,
  Notifications,
  PermIdentity,
  WorkOutline,
} from "@material-ui/icons";
import React, { useState } from "react";
import { colors } from "../../../styles/gloabal.styles";
import {
  Logo,
  Nav,
  Wrapper,
  Links,
  LinksCtn,
  FlexRow,
  A,
  RowWithColor,
  LoginCtn,
  ButtonLogin,
  LoginButton,
  ButttonSigup,
  DrawerNavigation,
  StyledBurger,
  MenuProfile,
} from "./navbar.styles";
function NavBar({ isHome }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [isLogeed, setIsLogeed] = useState(true);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notifications, OpenNotifications] = React.useState(null);
  const [chats, OpenChats] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {    
    setAnchorEl(null);
  };

  return (
    <Nav isHome={isHome}>
      <Wrapper>
        <Logo>
          <HomeWork
            style={{ color: '#F0720A', fontSize: 60 }}
          />
          <p
            style={{
              color: isHome ? "#ffff" : "#ffff",
              marginLeft: 10,
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            Hotel Magic Monn
          </p>
        </Logo>
        <div>
          <StyledBurger open={openMenu} onClick={() => toggleMenu()}>
            <div />
            <div />
            <div />
          </StyledBurger>
          {/* <Menu  style={{color: isHome ? "#fff": "#000",fontSize:40}} onClick={()=> toggleMenu()}/> */}
        </div>
        <Links>
          <LinksCtn>
            <Link href="/" style={{ textDecoration: "none" }}>
              <FlexRow>
                <A isHome={isHome}>Inicio</A>
                    
              </FlexRow>
            </Link>
            <Link href="/job" style={{ textDecoration: "none" }}>
              <FlexRow>                
                <A isHome={isHome}></A>
               
              </FlexRow>
            </Link>
            <Link href="/soyempresa" style={{ textDecoration: "none" }}>
              <FlexRow>
                <A isHome={isHome}>Habitaciones</A>
               
              </FlexRow>
            </Link>
            <Link href="/job" style={{ textDecoration: "none" }}>
              <FlexRow>
                <A isHome={isHome}>Reservaciones</A>
                
              </FlexRow>
            </Link>
            <Link href="/job" style={{ textDecoration: "none" }}>
              <FlexRow>
                <A isHome={isHome}>Contacto</A>
               
              </FlexRow>
            </Link>
          </LinksCtn>
        </Links>
      </Wrapper>

      <DrawerNavigation open={openMenu}></DrawerNavigation>
    </Nav>
  );
}

export default NavBar;