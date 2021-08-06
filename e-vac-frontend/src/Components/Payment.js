import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
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
            margin: theme.spacing(1),
            width: theme.spacing(90),
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
    const [product, setProduct] = useState({
        name: "Ambulance",
        price: 20,
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
                console.log("STATUS", status);
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
                                <Typography gutterBottom variant="h5">
                                    Booking Status   :
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography gutterBottom variant="h6">
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
                            Type of Emergency
                        </Typography>
                        <div>
                            <Chip className={classes.chip} label="Accident" />
                            <Chip className={classes.chip} style={{ backgroundColor: 'yellowgreen' }} label="Heat Attack" />
                            <Chip className={classes.chip} label="Pregnancy" />
                            <Chip className={classes.chip} label="other" />
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
            <Paper>
                <GoogleMap />
            </Paper>
        </div >
    );
}
export default AmbulanceDetails;