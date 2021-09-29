import React from 'react';
import {
    Hero,
    About,
    ShowCase,
    Chefs,
    OurStory,
    ClientTest,
    NavBar,
    Footer,
    Contact,
} from '../Components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    about: {
        marginTop: '2rem',
        marginBottom: '5rem',
    },
    showcase: {
        marginTop: '5.5rem',
        marginBottom: '5rem',
    },
    story: {
        marginTop: '5.5rem',
        width: '85%',
        alignSelf: 'center',
    },
    chefs: {
        marginTop: '10rem',
        width: '85%',
        alignSelf: 'center',
        marginBottom: '10rem',
    },
    client: {
        width: '85%',
        alignSelf: 'center',
        marginBottom: '10rem',
        marginTop: '3rem',
    },
    contact: {
        width: '85%',
        alignSelf: 'center',
        marginBottom: '15rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    footer: {
        height: '40vh',
        marginTop: 'auto',
    },
});

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavBar />

            {/* Hero */}
            <div className={classes.hero}>
                <Hero />
            </div>

            <div className={classes.about}>
                <About />
            </div>

            <div className={classes.showcase}>
                <ShowCase />
            </div>
            <div className={classes.story}>
                <OurStory />
            </div>
            <div className={classes.chefs}>
                <Chefs />
            </div>
            <div className={classes.client}>
                <ClientTest />
            </div>
            <div className={classes.contact}>
                <Contact />
            </div>
            <div className={classes.footer}>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
