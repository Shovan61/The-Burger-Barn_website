import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { slider } from '../utilitis';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'rgba(124, 119, 119, 0.07)',
    },
    image: {
        height: '420px',
        width: '100%',
    },
    '@media (max-width: 950px)': {
        image: {
            height: '300px',
        },
    },
    '@media (max-width: 650px)': {
        image: {
            height: '200px',
        },
    },
});

function Hero() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Carousel
                navButtonsProps={{
                    style: {
                        backgroundColor: 'rgba(0,0,0, 0.3)',
                        borderRadius: '50%',
                        opacity: 1,
                    },
                }}
                stopAutoPlayOnHover={true}
                fullHeightHover={false}
                timeout={500}
                autoPlay={true}>
                {slider.map((curObj) => (
                    <img
                        className={classes.image}
                        key={curObj.id}
                        src={curObj.img}
                        alt={curObj.id}
                    />
                ))}
            </Carousel>
        </div>
    );
}

export default Hero;
