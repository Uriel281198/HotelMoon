import { Box, Grid, Link } from "@material-ui/core";
import {
  ArrowRight,
  LocalAtm,
  LocationOn,
  NavigateNext,
  QueryBuilder,  
  Star,
  Today,
} from "@material-ui/icons";
import Image from "next/image";
import React from "react";
import NavBar from "../components/shared/NavBar";
import NavBarProfile from "../components/shared/NavBarProfile";
// import { ItemJob } from "../styles/job.styles";
import {
  Container,
  SocialNetworks,
  Header,
  FlexRow,
  DescriptionSection,
  OverViewJob,
  FlexColumn,
  JobDescription,
  JobPopular,
  RelatedJobs,
} from "../styles/jobdetail.styles";

export default function JobDetail() {
  return (
    <Container>
      <SocialNetworks />
      <NavBarProfile isHome={false} />

      <Header>
        <Box className="overlay">
          <Box className="wrapper">
            <h2>Atención a clientes bilingüe$13,000 mas BONOS /HOME OFFICE</h2>

            <Box className="back_section">
              <FlexRow className="row">
                <p>Home</p>
                <NavigateNext className="icon" />
              </FlexRow>
              <FlexRow className="row">
                <p>Trabajos</p>
                <NavigateNext className="icon" />
              </FlexRow>
              <FlexRow className="row">
                <p>Home Offfice </p>
                <NavigateNext className="icon" />
              </FlexRow>
            </Box>
          </Box>
        </Box>
      </Header>

      <DescriptionSection>
        <Grid container>
          <JobDescription item xs={12} md={8} lg={8}>
            <Box className="description_box">
              <FlexColumn>
                <h2>Descripcion del empleo</h2>
                <FlexRow>
                  <hr className="dividerShort" />
                  <hr className="divider" />
                </FlexRow>
              </FlexColumn>
              <p>
                Dolore minim anim Lorem reprehenderit commodo. Incididunt non
                enim eiusmod est in mollit esse. Laboris nulla proident est
                mollit commodo sint nisi laboris anim. Duis deserunt sit qui
                dolor elit mollit eiusmod sunt quis nisi et enim elit irure.
                Duis voluptate in est sit commodo minim sint exercitation mollit
                eiusmod nisi fugiat quis nostrud. Nisi amet nulla ipsum pariatur
                reprehenderit dolor laborum magna sunt sint. Ipsum nisi nisi
                mollit consectetur laborum anim velit duis tempor nisi elit et.
                Enim veniam deserunt dolor aliquip ea velit fugiat mollit
                aliquip nulla. Dolore ipsum deserunt ipsum esse labore laborum
                aliquip consectetur non anim veniam enim. Aliquip culpa veniam
                amet in Lorem. Laboris reprehenderit sit magna Lorem dolore
                eiusmod pariatur fugiat nostrud pariatur sunt labore. Cupidatat
                laborum elit ex ex minim proident veniam occaecat Lorem nulla
                Lorem culpa.
              </p>

              <FlexColumn>
                <h2>Requisitos</h2>
                <FlexRow>
                  <hr className="dividerShort" />
                  <hr className="divider" />
                </FlexRow>
              </FlexColumn>

              {[1, 1, 1, 1, 1].map((item, index) => (
                <Box key={index} className="request">
                  <ArrowRight className="colorIcon" />
                  <p>
                    {" "}
                    Build next-generation web applications with a focus on the
                    client side.
                  </p>
                </Box>
              ))}

              <FlexColumn>
                <h2>Experiencia</h2>
                <FlexRow>
                  <hr className="dividerShort" />
                  <hr className="divider" />
                </FlexRow>
              </FlexColumn>

              {[1, 1, 1].map((item, index) => (
                <Box key={index} className="request">
                  <ArrowRight className="colorIcon" />
                  <p>
                    2 years of relevant work experience in software development.
                  </p>
                </Box>
              ))}
            </Box>
          </JobDescription>

          <OverViewJob item xs={12} md={4} lg={4}>
            <JobPopular>
              <Box className="heading">
                <h4>Vision General</h4>
              </Box>
              <Box className="content">
                <img src="http://www.webstrot.com/html/tm/thejobs/images/content/spotlight_img.jpg" />
                <h4 className="separation">Ejecutivo/Asesor De Ventas</h4>
                <p className="separation">Webstrot Technology Ltd.</p>
                <FlexRow className="separation">
                  <LocalAtm className="colorIcon" />
                  <p>6,000MXN - 10,000MXN</p>
                </FlexRow>
              </Box>

              <Box className="detail_job">
                <FlexRow className="row">
                  <Today className="icon" />
                  <FlexColumn>
                    <p className="title"> Dia publicado</p>
                    <p className="subtitle">03-11-2011</p>
                  </FlexColumn>
                </FlexRow>

                <FlexRow className="row">
                  <LocationOn className="icon" />
                  <FlexColumn>
                    <p className="title">Localizacion</p>
                    <p className="subtitle">03-11-2011</p>
                  </FlexColumn>
                </FlexRow>

                <FlexRow className="row">
                  <Star className="icon" />
                  <FlexColumn>
                    <p className="title">Experiencia</p>
                    <p className="subtitle">1+ año de experiencia</p>
                  </FlexColumn>
                </FlexRow>

                <FlexRow className="row">
                  <QueryBuilder className="icon" />
                  <FlexColumn>
                    <p className="title">Horario</p>
                    <p className="subtitle">6am a 5pm</p>
                  </FlexColumn>
                </FlexRow>

                <FlexRow className="row">
                  <Star className="icon" />
                  <FlexColumn>
                    <p className="title">Categoria</p>
                    <p className="subtitle">Call Center</p>
                  </FlexColumn>
                </FlexRow>
              </Box>
              <Box className="flex_btn">
                <input
                  className="btn_apply"
                  type="button"
                  value="Aplicar Ahora"
                />
              </Box>
            </JobPopular>
          </OverViewJob>
        </Grid>
      </DescriptionSection>

      <RelatedJobs>
        <Grid container>
          <Grid item xs={12} md={8} lg={8} className="grid_item">
            <FlexColumn>
              <h2>Empleos relacionados</h2>
              <FlexRow>
                <hr className="dividerShort" />
                <hr className="divider" />
              </FlexRow>
            </FlexColumn>
            {/* {[1, 2, 3].map((item, index) => (
              <ItemJob key={index}>
                <Box className="row_job">
                  <div className="leftSide">
                    <Image
                      className="img"
                      src="/img1.png"
                      alt="me"
                      width="50"
                      height="50"
                    />
                  </div>
                  <div className="rightSide">
                    <p className="title">Software Engineer</p>
                    <p className="subTitle">MizTech</p>
                    <FlexRow className="locationC">
                      <FlexRow>
                        <LocationOn className="icon" />
                        <p className="location">Ciudad de mexico, Centro </p>
                      </FlexRow>
                    </FlexRow>
                  </div>
                </Box>
                <Link href="/Jobdetail">
                  <Box className="actions">
                    <div className="timeJob">
                      <p>Tiempo completo</p>
                    </div>
                    <input
                      type="button"
                      value="Aplicar Ahora"
                      className="btn_apply"
                    />
                  </Box>
                </Link>
              </ItemJob>
            ))} */}
          </Grid>
        </Grid>
      </RelatedJobs>
    </Container>
  );
}
