import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import image from '../images/rest.jpg';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    title: {
        color: 'wheat',
        fontWeight: '400',
        fontSize: '2rem',
        letterSpacing: '7px',
        marginBottom: '4rem',
        textAlign: 'center',
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    img: {
        height: '650px',
        width: '500px',
        borderRadius: '20px',
        transition: 'all 0.3s ease-out',
        '&:hover': {
            transform: 'rotateY(10deg) skewY(-3deg)',
            boxShadow: '-17px -10px 16px 5px rgba(0,0,0,0.88)',
        },
    },
    para: {
        textAlign: 'center',
        color: 'wheat',
        width: '45%',
        marginTop: '7rem',
        letterSpacing: '1px',
        fontFamily: 'lato',
        lineHeight: '1.5rem',
    },
    '@media (max-width: 1115px)': {
        content: {
            flexDirection: 'column',
            alignItems: 'center',
        },
        para: {
            fontSize: '1rem',
        },
    },
    '@media (max-width: 600px)': {
        img: {
            height: '500px',
            width: 'auto',
        },
    },
    '@media (max-width: 320px)': {
        img: {
            height: '400px',
            width: 'auto',
        },
    },
});

function OurStory() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1 className={classes.title}>Our Story</h1>
            <div className={classes.content}>
                <img className={classes.img} src={image} alt='rest' />

                <p className={classes.para}>
                    The Burger Barn was born out of the United States in 2015,
                    with the original site built on the stylish seafront of
                    Brighton Beach. At the time, we had the simple idea of
                    bringing together two of our favourite things, Burgers and
                    Beer, and combine them with a fun, upbeat and casual place
                    to eat and drink. With that at the forefront of our mind, we
                    went out and built not only a great restaurant serving
                    quality burgers, but also a great bar where people could
                    just as easily stop for a post-work drink. We have always
                    been and will always remain a fun, casual and upbeat
                    restaurant and bar where you can come to dine alone, or with
                    friends and family – it’s our brand promise, and it’s what
                    we mean when we say ‘we are made of good stock’.
                </p>
            </div>
        </div>
    );
}

export default OurStory;
