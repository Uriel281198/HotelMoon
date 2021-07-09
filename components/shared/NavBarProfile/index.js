import { Box, Link, Menu, MenuItem } from "@material-ui/core";
import {
  AccountCircle,
  ChatBubble,
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
function NavBarProfile({ isHome }) {
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
      <Link href="/">
      <Logo>
          <WorkOutline
            style={{ color: colors.primaryColor,  fontSize: 50}}
          />
          <p
            style={{
              color:'#000',
              marginLeft: 10,
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            CVJOBS
          </p>
        </Logo>
      </Link>
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
                <RowWithColor />                
              </FlexRow>
            </Link>
            <Link href="/job" style={{ textDecoration: "none" }}>
              <FlexRow>                
                <A isHome={isHome}>Estoy buscando empleo</A>
                <RowWithColor />
              </FlexRow>
            </Link>
            <Link href="/soyempresa" style={{ textDecoration: "none" }}>
              <FlexRow>
                <A isHome={isHome}>Reclutadores</A>
                <RowWithColor />
              </FlexRow>
            </Link>
            <Link href="/job" style={{ textDecoration: "none" }}>
              <FlexRow>
                <A isHome={isHome}>Blog</A>
                <RowWithColor />
              </FlexRow>
            </Link>         
            <Link href="/job" style={{ textDecoration: "none" }}>
              <FlexRow>
                <A isHome={isHome}>Contacto</A>
                <RowWithColor />
              </FlexRow>
            </Link>
          </LinksCtn>
          <LoginCtn>
            {isLogeed ? (
              <MenuProfile>
                <Box>
                  <AccountCircle className="icon first" onClick={handleClick} />
                  <Menu
                    id="simple-menu"
                    anchorEl={notifications}
                    keepMounted
                    open={Boolean(notifications)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Mi perfil</MenuItem>
                    <MenuItem onClick={handleClose}>Mi Curriculumn</MenuItem>
                    <MenuItem onClick={handleClose}>
                      Mis Postulaciones{" "}
                    </MenuItem>
                  </Menu>
                </Box>
                <Box>
                  <Notifications className="icon" onClick={handleClick} />
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      Completar curriculum
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Notificaciones</MenuItem>
                    <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
                  </Menu>
                </Box>
                <Box>
                  <ChatBubble className="icon" onClick={handleClick} />
                  <Menu
                    id="simple-menu"
                    anchorEl={chats}
                    keepMounted
                    open={Boolean(chats)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Mis Chats</MenuItem>
                    <MenuItem onClick={handleClose}>Notificaciones</MenuItem>
                    <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
                  </Menu>
                </Box>
              </MenuProfile>
            ) : (
              <ButtonLogin>
                <PermIdentity style={{ color: "#ffff" }} />
                <Link href="/iniciosesion">
                  <LoginButton>LOGIN</LoginButton>
                </Link>
              </ButtonLogin>
            )}
            {!isLogeed && (
              <ButttonSigup>
                <Link href="/job">
                  <A isHome={isHome}>CREAR CUENTA</A>
                </Link>
              </ButttonSigup>
            )}
          </LoginCtn>
        </Links>
      </Wrapper>

      <DrawerNavigation open={openMenu}></DrawerNavigation>
    </Nav>
  );
}

export default NavBarProfile;
