import React from 'react';
import logo from '../images/white logo.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: 'wheat',
        fontWeight: '400',
        fontSize: '2rem',
        letterSpacing: '7px',
        marginBottom: '1rem',
    },
    logo: {
        height: '40px',
    },
    para: {
        textAlign: 'center',
        color: 'wheat',
        width: '85%',
        marginTop: '2rem',
        fontSize: '1rem',
        letterSpacing: '1px',
        fontFamily: 'lato',
        lineHeight: '1.5rem',
    },
    '@media (max-width: 375px)': {
        header: {
            fontSize: '1.5em',
            marginBottom: '0.5rem',
            letterSpacing: '1.5px',
        },
        para: {
            fontSize: '1rem',
        },
    },
});

function About() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1 className={classes.header}>About The Burger Barn</h1>
            <img className={classes.logo} src={logo} alt='logo' />

            <p className={classes.para}>
                The original idea behind The Burger Barn's was to find a way to
                make nutritious products for our family who are all passionate
                about plant-based diets. Back when we started in 2015 most
                people thought we were crazy. “Plants that look and taste like
                meat, made in your kitchen!?” Okay, maybe we were crazy, but
                with passion and determination, great things can happen. Now, a
                few decades on, the fully fledged second generation family
                business, a larger family (and a few grandchildren), we wanted
                to bring you some more amazingly good tasting plant-based foods,
                which will leave you feeling good! We still make our food for
                our family, it’s just a lot bigger now, so join us and you can
                enjoy tasty food that is better for you and the planet. From our
                kitchen to yours. With love from the Barn Family
            </p>
        </div>
    );
}

export default About;
