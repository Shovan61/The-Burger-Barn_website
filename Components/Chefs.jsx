import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import image from '../images/cook.jpg';
import Avatar from '@material-ui/core/Avatar';
import { chefs } from '../utilitis';

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
        height: '680px',
        width: '500px',
        borderRadius: '20px',
        transition: 'all 0.3s ease-out',
        '&:hover': {
            transform: 'rotateY(10deg) skewY(-3deg)',
            boxShadow: '-17px -10px 16px 5px rgba(0,0,0,0.88)',
        },
    },
    right: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    info: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    avatar: {
        height: '100px',
        width: '100px',
    },
    name: {
        textAlign: 'center',
        color: 'wheat',
        fontSize: '1.2rem',
        letterSpacing: '3px',
        marginTop: '0.5rem',
    },
    para: {
        textAlign: 'center',
        color: 'wheat',
        marginTop: '1rem',
        marginBottom: '1rem',
        // fontSize: '1rem',
        fontFamily: 'lato',
    },
    '@media (max-width: 1115px)': {
        content: {
            flexDirection: 'column',
            alignItems: 'center',
        },
        img: {
            marginBottom: '2rem',
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

function Chefs() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1 className={classes.title}>Meet The Chefs</h1>
            <div className={classes.content}>
                <img className={classes.img} src={image} alt='cook' />

                <div className={classes.right}>
                    {chefs.map((cur) => (
                        <div key={cur.id} className={classes.info}>
                            <Avatar
                                alt='Remy Sharp'
                                src={cur.img}
                                className={classes.avatar}
                            />
                            <span className={classes.name}>{cur.name}</span>
                            <p className={classes.para}>{cur.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Chefs;
