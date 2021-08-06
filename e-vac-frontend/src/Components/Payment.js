import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Card } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';
import GoogleMap from './GoogleMap';
import StripeCheckout from "react-stripe-checkout"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(2),
            width: theme.spacing(80),
            height: theme.spacing(73),
        },
    },
    grid: {
        width: '100%',
        maxWidth: 500,
        backgroundColor: theme.palette.background.paper,

    },
    chip: {
        margin: theme.spacing(1),
    },
    section1: {
        margin: theme.spacing(8, 2),
    },
    section2: {
        margin: theme.spacing(4),
    },
    section3: {
        margin: theme.spacing(3, 1, 1),
        display: 'flex',
        justifyContent: 'space-around'
    },
}));

const AmbulanceDetails = () => {
    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();
    const list = location.state.detail;
    const dlr = list.price * 0.01349419;
    const [product, setProduct] = useState({
        name: "Ambulance",
        price: dlr,
        productBy: "E-Vac"
    })

    const makePayment = token => {
        const body = {
            token,
            product
        }
        const headers = {
            "Content-Type": "application/json"
        }

        return fetch(`http://localhost:5000/payment`, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        })
            .then(response => {
                console.log("RESPONSE", response);
                const { status } = response;
                window.alert("payment successfull")
                console.log("STATUS", status);
                history.push("/")
            })
            .catch(error => console.log(error))
    }


    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <div className={classes.grid}>
                    <div className={classes.section1}>
                        <Grid container alignItems="center">
                            <Grid item xs>
                                Total amount:  <Typography gutterBottom variant="h5">
                                    Rs{list.price}
                                </Typography>
                                Distance:  <Typography gutterBottom variant="h5">
                                    {list.distance} km
                                </Typography>
                            </Grid>

                            <Grid item>
                                Booking status: <Typography gutterBottom variant="h6">
                                    Confirm <CheckCircleOutlineSharpIcon style={{ color: 'green' }} />
                                </Typography>
                            </Grid>
                        </Grid>

                        <Typography color="textSecondary" variant="body2">
                            You can pay the the amount after the ride is complete.
                        </Typography>
                    </div>
                    <Divider variant="middle" />
                    <div className={classes.section2}>
                        <Typography gutterBottom variant="body1">
                            <h6>Driver info :</h6>
                        </Typography>
                        <div>
                            <Chip className={classes.chip} style={{ backgroundColor: 'lightblue' }} label={list.driverName} />
                            <Chip className={classes.chip} style={{ backgroundColor: 'yellowgreen' }} label={list.driverNumber} />

                        </div>
                    </div>
                    <div className={classes.section3}>
                        <Button variant="contained" color="primary">Call driver</Button>

                        <StripeCheckout
                            stripeKey="pk_test_51IpLApSFnkLGLRyHy4PXIVanpuwKNOatWnsrSXWxlTdyB2RwZf7H6XIwoGUQT8W1gYUBLzlkWl9P2u9odJwDo2lA005ncsKoGd"
                            token={makePayment}
                            name="Payment"
                            amount={product.price * 100}>
                            <Button variant="contained" color="secondary">
                                Pay Now
                            </Button>
                        </StripeCheckout>

                    </div>
                </div>

            </Paper>

            <Card style={{ width: "52rem" }}>
                <GoogleMap />
            </Card>



        </div >
    );
}
export default AmbulanceDetails;