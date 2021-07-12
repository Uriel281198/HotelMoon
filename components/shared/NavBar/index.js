import { Box, Link, Menu, MenuItem } from "@material-ui/core";
import {
  AccountCircle,
  ChatBubble,
  HomeWork,
  Notifications,
  PermIdentity,
  WorkOutline,
} from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { userContext } from "../../../context/userContext";
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
  const { LogoutUser, token_user } = useContext(userContext);

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
          <HomeWork style={{ color: "#F0720A", fontSize: 60 }} />
          <p
            style={{
              color: isHome ? "#F0720A" : "#F0720A",
              marginLeft: 10,
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            HMM
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
            <Link href="/habitaciones" style={{ textDecoration: "none" }}>
              <FlexRow>
                <A isHome={isHome}>Habitaciones</A>
              </FlexRow>
            </Link>
            <Link href="/misreservaciones" style={{ textDecoration: "none" }}>
              <FlexRow>
                <A isHome={isHome}>Restaurantes</A>
              </FlexRow>
            </Link>
            {/*  <Link href="/contacto" style={{ textDecoration: "none" }}>
              <FlexRow>
                <A isHome={isHome}>Contacto</A>
              </FlexRow>
            </Link> */}
          </LinksCtn>
          <LoginCtn>
            {token_user !== null ? (
              <MenuProfile>
                <Box className="div">
                  <p>Mis Reservaciones</p>
                </Box>
                <Box></Box>
                <Box></Box>
              </MenuProfile>
            ) : (
              <>
                <ButtonLogin>
                  <PermIdentity style={{ color: "#ffff" }} />
                  <Link href="/iniciosesion">
                    <LoginButton>LOGIN</LoginButton>
                  </Link>
                </ButtonLogin>
                <ButttonSigup>
                  <Link href="/job">
                    <A isHome={isHome}>CREAR CUENTA</A>
                  </Link>
                </ButttonSigup>
              </>
            )}
          </LoginCtn>
        </Links>
      </Wrapper>

      <DrawerNavigation open={openMenu}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <FlexRow>
            <A isHome={isHome}>Inicio</A>
          </FlexRow>
        </Link>
        <Link href="/habitaciones" style={{ textDecoration: "none" }}>
          <FlexRow>
            <A isHome={isHome}>Habitaciones</A>
          </FlexRow>
        </Link>
        <Link href="/misreservaciones" style={{ textDecoration: "none" }}>
          <FlexRow>
            <A isHome={isHome}>Mis Reservaciones</A>
          </FlexRow>
        </Link>
        <Link href="/contacto" style={{ textDecoration: "none" }}>
          <FlexRow>
            <A isHome={isHome}>Contacto</A>
          </FlexRow>
        </Link>

        {token_user === null ? (
          <Box>
            <Link href="/iniciosesion" style={{ textDecoration: "none" }}>
              <FlexRow>
                <A isHome={isHome}>iniciar sesion</A>
              </FlexRow>
            </Link>
            <Link href="/registro" style={{ textDecoration: "none" }}>
              <FlexRow>
                <A isHome={isHome}>registrarme</A>
              </FlexRow>
            </Link>
          </Box>
        ) : (
          <FlexRow>
            <A isHome={isHome} onClick={() => LogoutUser()}>
              Cerrar Sesion
            </A>
          </FlexRow>
        )}
      </DrawerNavigation>
    </Nav>
  );
}

export default NavBar;
