import React, { useState, useEffect, useContext } from "react";
import OtpInput from "react-otp-input";
// import OTPInput, { ResendOTP } from "otp-input-react";
import { useLocation, useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import { Component } from "react";
import { UserContext } from "../App";

const useStyles = makeStyles(theme => ({
  grid: {
    backgroundColor: "grey",
    height: "50vh",
    textAlign: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

const OtpBox = ({ props }) => {
  const classes = useStyles();
  const theme = useTheme();
  const location = useLocation();
  const history = useHistory();
  const [otp, setOtp] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    setPhoneNumber(location.state.detail); // result: '/secondpage'
  }, [location])

  const handleOtp = async (otp) => {

    otp.preventDefault();
    const res = await fetch('/login/verifyotp', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: ({
        phoneNumber,
        otp
      })
    });
    const myOtp = res.json;
    if (res.status === 422 || !myOtp) {
      window.alert("Invalid otp")
    }
    else {
      dispatch({ type: "USER", payload: true })
      window.alert("Login successfull");
      history.push("/")

    }

  }


  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Grid
          container
          style={{ backgroundColor: "white" }}
          className={classes.grid}
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item container justify="center">
            <Grid item container alignItems="center" direction="column">
              <Grid item>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
              </Grid>
              <Grid item>
                <Typography component="h1" variant="h5">
                  Verification Code
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Paper elevation={0}>
              <Typography variant="h6">
                Please enter the verification code sent to your mobile
              </Typography>
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            container
            justify="center"
            alignItems="center"
            direction="column"
          >
            <Grid item spacing={3} justify="center">
              <OtpInput
                separator={
                  <span>
                    <strong>.</strong>
                  </span>
                }
                inputStyle={{
                  width: "3rem",
                  height: "3rem",
                  margin: "0 1rem",
                  fontSize: "2rem",
                  borderRadius: 4,
                  border: "1px solid rgba(0,0,0,0.3)"
                }}
                value={otp}
                onChange={(otp) => setOtp(otp)}
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleOtp}
              >
                Verify
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default OtpBox;