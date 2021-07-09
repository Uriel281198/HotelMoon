import { Link } from "@material-ui/core";
import { PermIdentity, WorkOutline } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { appContext } from "../../../context/loginContext";
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
} from "./navbar.styles";
function NavBar({ isHome }) {
  const [openMenu, setOpenMenu] = useState(false);
  const { isLogged_company,LogoutCompany } = useContext(appContext);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <Nav isHome={isHome}>
      <Wrapper>
        <Logo>
          <WorkOutline className="logo" />
          <p className="logo_name">CVJOBS EMPRESA</p>
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
            <Link href="/soyempresa" style={{ textDecoration: "none" }}>
              <FlexRow>
                <A isHome={isHome}>Inicio</A>
                <RowWithColor />
                {/* {openFirstMenu && <MenuOption>
                    <p>Inicio</p>
                    <p>Lol</p>
                  </MenuOption>} */}
              </FlexRow>
            </Link>
            <Link href="/soyempresa" style={{ textDecoration: "none" }}>
              <FlexRow>
                <A isHome={isHome}>Estoy buscando empleo</A>
                <RowWithColor />
              </FlexRow>
            </Link>
            <Link href="/soyempresa" style={{ textDecoration: "none" }}>
              <FlexRow>
                <A isHome={isHome}>Busco personal</A>
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
                <A isHome={isHome}>Pricing</A>
                <RowWithColor />
              </FlexRow>
            </Link>
          </LinksCtn>
          <LoginCtn>
            {!isLogged_company ? (
              <ButtonLogin>
                <PermIdentity style={{ color: "#ffff" }} />
                <Link href="/soyempresa/iniciosesion">
                  <LoginButton>Iniciar sesion</LoginButton>
                </Link>
              </ButtonLogin>
            ) : (
              <ButtonLogin onClick={()=> LogoutCompany()}>
                <PermIdentity style={{ color: "#ffff" }} />
                {/* <Link href="/soyempresa/iniciosesion"> */}
                  <LoginButton>Cerrar sesion</LoginButton>
                {/* </Link> */}
              </ButtonLogin>
            )}
            { !isLogged_company && <ButttonSigup>
              <Link href="/soyempresa/registro">
                <A isHome={isHome}>Crear cuenta</A>
              </Link>
            </ButttonSigup>}
          </LoginCtn>
        </Links>
      </Wrapper>

      <DrawerNavigation open={openMenu}></DrawerNavigation>
    </Nav>
  );
}

export default NavBar;
