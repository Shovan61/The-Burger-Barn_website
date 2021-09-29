import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logoImage from '../images/white logo.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useGlobal } from '../Context';
import CallIcon from '@material-ui/icons/Call';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';
import './NavBar.css';

const useStyles = makeStyles({
    content: {
        display: 'flex',
        alignItems: 'center',
        height: '101%',
    },
    logo: {
        marginLeft: '10px',
        height: '100%',
        width: '20%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        transition: 'all 0.2s ease-in-out',
    },
    logoI: {
        transform: 'translateX(50%)',
        height: '50px',
        width: '50px',
        transition: 'all 0.2s ease-in-out',
    },
    companyName: {
        color: 'wheat',
        fontSize: '20px',
    },
    navgations: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '60%',
        height: '100%',
    },
    contact: {
        display: 'flex',
        alignItems: 'center',
        width: '115px',
        justifyContent: 'space-between',
        height: '30%',
    },

    nvItemContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '70%',
    },
    nvItem: {
        color: 'wheat',
        fontSize: '2rem',
        letterSpacing: '10px',
        fontWeight: '300',
        cursor: 'pointer',
        transition: 'all 0.2s ease-out',
        '&:hover': {
            color: 'red',
        },
    },
    cartLogin: {
        width: '20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    cartIcon: {
        color: 'white',
    },
    log: {
        color: 'white',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
            color: 'red',
        },
    },
    '@media (max-width: 768px)': {
        nvItem: {
            fontSize: '2rem',
        },
        log: {
            fontSize: '1rem',
        },
        navgations: {
            width: '50%',
        },
        cartLogin: {
            width: '30%',
            justifyContent: 'center',
        },
    },
    '@media (max-width: 570px)': {
        logoI: {
            height: '40px',
            width: '40px',
        },
        companyName: {
            fontSize: '16px',
        },
        nvItem: {
            letterSpacing: '1px',
        },
        log: {
            fontSize: '1rem',
        },
    },
    '@media (max-width: 414px)': {
        contact: {
            display: 'none',
        },
        cartIcon: {
            height: '1rem',
        },
        logoI: {
            height: '30px',
            width: '30px',
        },
        companyName: {
            display: 'none',
        },
        nvItem: {
            fontSize: '1.5rem',
        },
        log: {
            marginRight: '1rem',
            fontSize: '0.7rem',
        },
    },
});

function NavBar() {
    const classes = useStyles();
    let history = useHistory();
    const { cartItems } = useGlobal();
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
    const [isNavOpen, setisNavOpen] = useState(false);

    const handleClickMenuPage = () => {
        history.push('/menu');
    };

    const handleClickHomePage = () => {
        history.push('/');
    };

    const handleClickcartPage = () => {
        history.push('/cart');
    };

    return (
        <div className={`root ${!isNavOpen && 'active'}`}>
            {/* string */}
            <div className='string' />

            {/* key */}
            <div
                className={`key ${!isNavOpen && 'active'}`}
                onClick={() => setisNavOpen(!isNavOpen)}>
                <span className='key-text'>
                    {isNavOpen ? 'Close' : 'Click Me'}
                </span>
            </div>

            {/* Content */}
            <div className={classes.content}>
                <div className={classes.logo}>
                    <img className={classes.logoI} src={logoImage} alt='logo' />
                    <span className={classes.companyName}>The Burger Barn</span>
                </div>
                <div className={classes.navgations}>
                    <div className={classes.contact}>
                        <CallIcon style={{ color: 'wheat' }} />
                        <span style={{ color: 'wheat', fontFamily: 'lato' }}>
                            (01) 234 5678
                        </span>
                    </div>
                    <div className={classes.nvItemContainer}>
                        <h1
                            className={classes.nvItem}
                            onClick={handleClickHomePage}>
                            Home
                        </h1>
                        <h1
                            className={classes.nvItem}
                            onClick={handleClickMenuPage}>
                            Menu
                        </h1>
                    </div>
                </div>

                <div className={classes.cartLogin}>
                    <IconButton
                        aria-label='Cart'
                        color='secondary'
                        onClick={handleClickcartPage}>
                        <Badge
                            badgeContent={cartItems.length}
                            color='secondary'>
                            <ShoppingCartIcon className={classes.cartIcon} />
                        </Badge>
                    </IconButton>
                    {user ? (
                        <IconButton
                            aria-label='Login'
                            color='primary'
                            onClick={logout}>
                            <span className={classes.log}>Logout</span>
                        </IconButton>
                    ) : (
                        <IconButton
                            aria-label='Login'
                            color='primary'
                            onClick={loginWithRedirect}>
                            <span className={classes.log}>Login</span>
                        </IconButton>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NavBar;
