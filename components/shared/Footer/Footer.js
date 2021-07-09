import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Button,
  TextField,
  Typography,
  Divider,
  Paper,
} from "@material-ui/core";

import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  Business,
  WhatsApp,
  ArrowUpward,
  NotificationsActive,
  AddCircle,
} from "@material-ui/icons";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

var d = new Date();
var n = d.getFullYear();

function irArriba() {
 window.scrollTo({ scrollTop: 5000, top: 0, behavior: "smooth" });
}

const Footer = () => {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(1);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Box className={classes.container} style={{ paddingTop: "5%" }}>
      <Grid
        justify="center"
        container
        style={{ padding: 10, backgroundColor: "#797979" }}
      >
        <NotificationsActive className={classes.logoNewsletter} />

        <Paper
          elevation={0}
          style={{ backgroundColor: "#797979", padding: 15 }}
        >
          <Typography style={{ color: "#FFFFFF" }}>
            GET JOBS NOTIFICATIONS
          </Typography>

          <Typography style={{ color: "#FFFFFF" }}>
            Free Subscribe Our Newsletter Now!
          </Typography>
        </Paper>

        <Paper
          elevation={0}
          style={{ backgroundColor: "#797979", padding: 15, width: "25%" }}
        >
          <input
            style={{ width: "100%" }}
            placeholder="Ingresa tu correo electrónico… "
            className={classes.buttonStyleSub}
          />
        </Paper>

        <Paper
          elevation={0}
          style={{ backgroundColor: "#797979", padding: 15, width: "20%" }}
        >
          <Button className={classes.btnNewsletter}>SUBMIT</Button>
        </Paper>
      </Grid>

      <Grid
        justify="center"
        spacing={1}
        style={{
          padding: 15,
          backgroundColor: "#0e1427eb",
          borderBlockEnd: "3px solid #ffffff14 3% 3%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Business style={{ color: "#23c0e9", fontSize: "300%" }} />
        <Typography
          style={{ color: "#ffffff", paddingLeft: "10px", fontSize: "150%" }}
        >
          CV
        </Typography>
        <Typography
          style={{ color: "#23c0e9", paddingLeft: "10px", fontSize: "150%" }}
        >
          JOBS
        </Typography>
      </Grid>

      <Grid
        justify="center"
        spacing={1}
        style={{
          backgroundColor: "#0e1427eb",
          //borderBlockEnd: "3px solid #ffffff14",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            width: "70%",
            borderBlockEnd: "1px solid #ffffff14",
          }}
        ></Box>
      </Grid>

      <Grid container style={{ padding: 15, backgroundColor: "#0e1427eb" }}>
        <Grid item xs={12} sm={6} md={3} className={classes.gItemSecond}>
          <Divider className={classes.lineOrange} />
          <Box className={classes.optionsContainer}>
            <Typography className={classes.titleFooter}>WHO WE ARE</Typography>
            <Divider className={classes.divider} />
            <Typography
              className={classes.subTitle}
              // onClick={() => navigate(`/garantias`)}
            >
              This is Photoshop's version of Lom Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum.
            </Typography>
            <Typography
              className={classes.subTitle}
              // onClick={() => navigate(`/acerca-de`)}
            >
              Proin akshay handge vel velit auctor aliquet. Aenean sollicitudin,
            </Typography>
            <Typography
              style={{ height: 60 }}
              className={classes.ReadMore}
              onClick={() => irArriba()}
            >
              <AddCircle />
              READ MORE
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.gItemSecond}>
          <Divider className={classes.lineOrange} />
          <Box className={classes.optionsContainer}>
            <Typography className={classes.titleFooter}>
              FOR CANDIDATE
            </Typography>
            <Divider className={classes.divider} />
            <Typography
              className={classes.subTitle}
              // onClick={() => navigate(`/garantias`)}
            >
              Add A Resume
            </Typography>
            <Typography
              className={classes.subTitle}
              // onClick={() => navigate(`/acerca-de`)}
            >
              Candidate Dashboard
            </Typography>
            <Typography
              className={classes.subTitle}
              // onClick={() => navigate(`/terminos-de-uso`)}
            >
              Past Applications
            </Typography>
            <Typography
              className={classes.subTitle}
              // onClick={() => navigate(`/acerca-de`)}
            >
              Job Alerts
            </Typography>
            <Typography
              className={classes.subTitle}
              onClick={() => (window.location.href = "Footer")}
            >
              Bookmarks
            </Typography>
            <Typography
              className={classes.subTitle}
              onClick={() => (window.location.href = "Footer")}
            >
              My Account
            </Typography>
            <Typography
              className={classes.subTitle}
              onClick={() => (window.location.href = "Footer")}
            >
              Your Jobs
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.gItemSecond}>
          <Divider className={classes.lineOrange} />
          <Box className={classes.optionsContainer}>
            <Typography className={classes.titleFooter}>
              FOR EMPLOYERS
            </Typography>
            <Divider className={classes.divider} />
            <Typography
              className={classes.subTitle}
              // onClick={() => navigate(`/acerca-de`)}
            >
              Browse Candidates
            </Typography>
            <Typography
              className={classes.subTitle}
              // onClick={() => navigate(`/acerca-de`)}
            >
              Add Job
            </Typography>
            <Typography
              className={classes.subTitle}
              // onClick={() => navigate(`/acerca-de`)}
            >
              Job Page
            </Typography>
            <Typography
              className={classes.subTitle}
              // onClick={() => navigate(`/acerca-de`)}
            >
              Job Packages
            </Typography>
            <Typography
              className={classes.subTitle}
              // onClick={() => navigate(`/acerca-de`)}
            >
              Work Process
            </Typography>
            <Typography
              className={classes.subTitle}
              // onClick={() => navigate(`/acerca-de`)}
            >
              My Account
            </Typography>
            <h1>....</h1>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.gItemSecond}>
          <Divider className={classes.lineOrange} />
          <Box className={classes.optionsContainer}>
            <Typography className={classes.titleFooter}>INFORMATION</Typography>
            <Divider className={classes.divider} />
            <Typography
              className={classes.subTitle}
              // onClick={() => navigate(`/acerca-de`)}
            >
              About Us
            </Typography>
            <Typography
              className={classes.subTitle}
              // onClick={() => navigate(`/acerca-de`)}
            >
              Terms & Conditions
            </Typography>
            <Typography
              className={classes.subTitle}
              // onClick={() => navigate(`/acerca-de`)}
            >
              Privacy Policy
            </Typography>
            <Typography
              className={classes.subTitle}
              // onClick={() => navigate(`/acerca-de`)}
            >
              Sitemap
            </Typography>
            <Typography
              className={classes.subTitle}
              // onClick={() => navigate(`/acerca-de`)}
            >
              Contact Us
            </Typography>
            <Typography
              className={classes.subTitle}
              // onClick={() => navigate(`/acerca-de`)}
            >
              FAQs
            </Typography>
            <h1>....</h1>
          </Box>
        </Grid>
      </Grid>

      <Grid
        justify="center"
        spacing={1}
        style={{
          backgroundColor: "#0e1427eb",
          //borderBlockEnd: "3px solid #ffffff14",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            width: "70%",
            borderBlockEnd: "1px solid #ffffff14",
          }}
        ></Box>
      </Grid>

      <Grid container className={classes.blackBox}>
        <Grid item xs={12} md={4} className={classes.itemBlack}>
          <Typography className={classes.textBlack}>
            © <span className={classes.date}>{n}</span> – CVJobs Todos los
            derechos reservados
          </Typography>
        </Grid>

        <Grid item xs={12} md={4} className={classes.itemBlack}>
          <Divider className={classes.line} />
          <ArrowUpward
            className={classes.textBlack}
            style={{ fontSize: 40 }}
            onClick={() => irArriba()}
          />
          <Divider className={classes.line} />
        </Grid>

        <Grid item xs={5} md={4} className={classes.itemBlack}>
          <Divider
            style={{
              width: 250,
              height: "80%",
              background: "#0e1427eb",
              marginLeft: 5,
              marginRight: 5,
            }}
          />
          <Facebook
            className={classes.bgfacebbok}
            onClick={() =>
              window.open(
                "https://www.facebook.com/LaGranFerreteraLGF/",
                "_blank"
              )
            }
          />

          <YouTube
            className={classes.bgYoutube}
            onClick={() =>
              window.open(
                "https://www.youtube.com/channel/UCQe8QZwDDuh8ezNej8T1s3g",
                "_blank"
              )
            }
          />

          {/* <Box className={classes.bgInsta}> */}
          <Instagram
            className={classes.bgInsta}
            onClick={() =>
              window.open(
                "https://www.instagram.com/lagranferretera/",
                "_blank"
              )
            }
          />
          {/* </Box> */}
          <Twitter
            className={classes.bgTwitter}
            onClick={() =>
              window.open("https://twitter.com/lagranferretera", "_blank")
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gItemSecond: {
    paddingTop: 20,
    // border: "1px solid red",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  lineOrange: {
    width: 2,
    height: "80%",
    background: "#cc4e34",
    marginLeft: 5,
    marginRight: 5,

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  logoNewsletter: {
    color: "#FFFFFF",
    fontSize: 90,
  },
  textNewletter: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
  },
  boxBorder: {
    width: "90%",
    display: "flex",
    justifyContent: "center",
  },
  buttonStyleSub: {
    width: "100%",
    height: 40,
    border: "3px solid #004f6e",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    paddingLeft: 8,
    "&:focus": {
      outline: "none",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "70%",
    },
  },
  btnNewsletter: {
    width: "60%",
    height: 40,
    background: "#f36969",
    color: "#ffff",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    "&:hover": {
      background: "#ffffff",
      color: "#222222",
    },
    [theme.breakpoints.down("sm")]: {
      width: "20%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "30%",
    },
  },
  socialContainer: {
    width: "55%",
    // border:"1px solid red",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      marginTop: 10,
    },
  },

  bgfacebbok: {
    color: "#707070",
    fontSize: 20,
    cursor: "pointer",
    //background: "#fff",
  },
  bgYoutube: {
    color: "#707070",
    fontSize: 20,
    //background: "#fff",
    cursor: "pointer",
  },
  bgInsta: {
    color: "#707070",
    cursor: "pointer",
    fontSize: 20,
    //background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
  },
  bgTwitter: {
    color: "#707070",
    cursor: "pointer",
    fontSize: 20,
    //background: "#00afe5",
  },
  colorInsta: {
    color: "#707070",
  },
  titleFooter: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontFamily: "Arial",
    fontSize: 22,
    borderWidth: 10,
    borderBottomWidth: 2,
  },
  ReadMore: {
    color: "#23c0e9",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 15,
    borderWidth: 10,
    borderBottomWidth: 2,
    marginBottom: 10,
    cursor: "pointer",
  },
  subTitle: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 15,
    borderWidth: 10,
    borderBottomWidth: 2,
    marginBottom: 10,
    cursor: "pointer",
    "&:hover": {
      color: "#c34e3e",
    },
  },
  blackBox: {
    //borderTop: "3px solid #ffffff14",
    background: "#0e1427eb",
    height: 50,
    [theme.breakpoints.down("sm")]: {
      height: 120,
    },
  },
  itemBlack: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textBlack: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    cursor: "pointer",
    "&:hover": {
      background: "#c34e3e",
    },
  },
}));
