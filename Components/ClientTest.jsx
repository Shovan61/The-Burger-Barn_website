import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { testimonial } from '../utilitis';
import Carousel from 'react-material-ui-carousel';
import Persons from './Persons';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    title: {
        color: 'wheat',
        fontWeight: '400',
        fontSize: '2rem',
        letterSpacing: '7px',
        marginBottom: '6rem',
        textAlign: 'center',
    },
    content: {
        height: '30vh',
    },
});

function ClientTest() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1 className={classes.title}>Client Testimonials</h1>
            <div className={classes.content}>
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
                    autoPlay={true}
                    animation='slide'>
                    {testimonial.map((cur) => (
                        <Persons key={cur.id} {...cur} />
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default ClientTest;
