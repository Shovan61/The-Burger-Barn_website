import React from 'react';
import { NavBar, Footer, CartItemCard } from '../Components';
import { useGlobal } from '../Context';
import IconButton from '@material-ui/core/IconButton';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import './CartPage.css';

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
        alignSelf: 'center',
        width: '90%',
        marginTop: '3rem',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10rem',
    },
    items: {
        width: '55%',
        display: 'flex',
        flexDirection: 'column',
    },

    empty: {
        color: 'wheat',
        fontSize: '4rem',
        fontWeight: '300',
        letterSpacing: '10px',
    },
    price: {
        marginTop: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        '& span': {
            color: 'wheat',
            fontFamily: 'lato',
            fontSize: '1.5rem',
        },
        marginBottom: '2rem',
    },
    input: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '1rem',
    },
    textarea: {
        minHeight: '300px',
        width: '90%',
        resize: 'none',
        backgroundColor: 'wheat',
        marginTop: '0.5rem',
        borderRadius: '5px',
        outline: 'none',
        border: '1px solid wheat',
    },
    textarea2: {
        minHeight: '10px',
        width: '90%',
        resize: 'none',
        backgroundColor: 'wheat',
        marginTop: '0.5rem',
        borderRadius: '5px',
        outline: 'none',
        border: '1px solid wheat',
    },
    btnContainer: {
        width: '83%',
        alignSelf: 'flex-start',
        position: 'relative',
        bottom: '2rem',
    },
    '@media (max-width: 1156px)': {},
    '@media (max-width: 900px)': {
        container: {
            flexDirection: 'column',
        },
        items: {
            width: '100%',
        },
    },
    '@media (max-width: 800px)': {},
    '@media (max-width: 500px)': {},
    '@media (max-width: 415px)': {},
});

function CartPage() {
    const classes = useStyles();
    let history = useHistory();
    const { cartItems } = useGlobal();
    const { user, loginWithRedirect } = useAuth0();

    const calcTotal = () => {
        const allAmount = cartItems.map((curItem) => {
            return (curItem.price * curItem.quantity).toFixed(2);
        });

        let total = 0;
        if (allAmount.length > 0) {
            total = allAmount.reduce((a, b) => {
                return b + a;
            });
        }

        return total;
    };

    const gotoCartPage = () => {
        history.push('/checkout');
    };

    return (
        <div className={classes.root}>
            <NavBar />
            <div className='hero-cart'>
                <h1>Checkout</h1>
            </div>

            <div className={classes.container}>
                <div className={classes.items}>
                    {cartItems.length === 0 ? (
                        <h1 className={classes.empty}>Your cart is empty!</h1>
                    ) : (
                        <div>
                            {cartItems.map((cur, i) => (
                                <CartItemCard key={i} {...cur} />
                            ))}
                        </div>
                    )}
                </div>
                <div className='box'>
                    <div className={classes.price}>
                        <span>Total</span>
                        <span>${calcTotal()}</span>
                    </div>
                    <div className={classes.input}>
                        <label
                            htmlFor='message'
                            style={{ color: 'wheat', fontFamily: 'lato' }}>
                            Additional Note
                        </label>
                        <textarea
                            className={classes.textarea}
                            id='message'
                            name='message'
                            required
                        />
                    </div>
                    <div className={classes.input}>
                        <label
                            htmlFor='message'
                            style={{ color: 'wheat', fontFamily: 'lato' }}>
                            Voucher
                        </label>
                        <textarea
                            className={classes.textarea2}
                            id='message'
                            name='message'
                            required
                        />
                    </div>
                    {user ? (
                        <>
                            {cartItems.length !== 0 && (
                                <div
                                    className={classes.btnContainer}
                                    onClick={gotoCartPage}>
                                    <button
                                        className='button-cart wood'
                                        type='submit'>
                                        <div>Check Out</div>
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div
                            className={classes.btnContainer}
                            onClick={loginWithRedirect}>
                            <button className='button-cart wood' type='submit'>
                                <div>Login</div>
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className={classes.footer}>
                <Footer />
            </div>
        </div>
    );
}

export default CartPage;
