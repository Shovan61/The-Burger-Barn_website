import React from 'react';
import { NavBar, Footer, FoodItems } from '../Components';
import { makeStyles } from '@material-ui/core/styles';
import './Menu.css';

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    footer: {
        height: '40vh',
        marginTop: 'auto',
    },
    container: {
        width: '100%',
        marginBottom: '10rem',
    },
    svg: {
        width: '100%',
        marginTop: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

function Menu() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavBar />
            <div className='hero'>
                <h1>Our Menu</h1>
            </div>

            <div className={classes.container}>
                <FoodItems />
            </div>

            <div className={classes.footer}>
                <Footer />
            </div>
        </div>
    );
}

export default Menu;
