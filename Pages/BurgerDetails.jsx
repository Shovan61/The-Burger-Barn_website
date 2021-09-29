import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobal } from '../Context';
import { NavBar, Footer } from '../Components';
import { makeStyles } from '@material-ui/core/styles';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import './BurgerDetails.css';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
    },

    footer: {
        height: '40vh',
        marginTop: 'auto',
    },
    container: {
        width: '85%',
        marginTop: '5rem',
        marginBottom: '8rem',
        alignSelf: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imageContainer: {
        height: '55vh',
        width: '50vw',
    },
    img: {
        height: '100%',
        width: '100%',
        borderRadius: '20px',
        objectFit: 'cover',
    },
    content: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    header: {
        color: 'wheat',
        letterSpacing: '5px',
        fontSize: '3rem',
        fontWeight: '300',
        textAlign: 'center',
        marginBottom: '1rem',
    },
    description: {
        color: 'wheat',
        fontFamily: 'lato',
        width: '80%',
        alignSelf: 'center',
    },
    checkOut: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    quantity: {
        width: '50%',
    },
    btn: {
        width: '50%',
        '& button': {
            height: '40px',
            width: '100px',
        },
    },
    delivery: {
        marginBottom: '2rem',
        width: '60%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        '& span': {
            color: 'wheat',
            fontFamily: 'lato',
        },
        '& svg': {
            color: 'wheat',
        },
    },
    '@media (max-width: 800px)': {
        container: {
            flexDirection: 'column',
        },
        imageContainer: {
            marginBottom: '3rem',
            width: '100%',
        },
        content: {
            width: '100%',
        },
    },
    '@media (max-width: 400px)': {
        header: {
            fontSize: '1.5rem',
        },
        checkOut: {
            marginTop: '2rem',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            '& div': {
                marginRight: '6rem',
            },
        },

        btn: {
            position: 'relative',
            left: '2.5rem',
        },
    },
});

function BurgerDetails() {
    const classes = useStyles();
    let { id } = useParams();
    const { getTheItem, addItemToCart } = useGlobal();
    const [quantity, setquantity] = useState(1);

    const item = getTheItem(id)[0];

    const handleMinus = () => {
        setquantity((prev) => {
            if (prev > 1) {
                return prev - 1;
            } else if (prev === 1) {
                return prev;
            }
        });
    };

    const handlePlus = () => {
        setquantity((prev) => {
            return prev + 1;
        });
    };

    const handleSubmit = () => {
        const itemObject = {
            id,
            name: item.name,
            image: item.image,
            quantity,
            price: item.price,
        };

        addItemToCart(itemObject);
    };

    return (
        <div className={classes.root}>
            <NavBar />
            <div className='hero-details'></div>
            <div className={classes.container}>
                <div className={classes.imageContainer}>
                    <img
                        className={classes.img}
                        src={item.image}
                        alt={item.name}
                    />
                </div>
                <div className={classes.content}>
                    <h1 className={classes.header}>{item.name}</h1>
                    <span
                        className={classes.header}
                        style={{ fontFamily: 'lato' }}>
                        ${item.price}
                    </span>
                    <div className={classes.delivery}>
                        <QueryBuilderIcon />
                        <span>Deliver Time: 40 min</span>
                    </div>

                    <span className={classes.description}>
                        {item.description}
                    </span>

                    <div className={classes.checkOut}>
                        <div className={classes.quantity}>
                            <div
                                className='wood'
                                style={{
                                    height: '40px',
                                    width: '150px',
                                    borderRadius: '5px',
                                    marginLeft: '3rem',
                                    boxShadow:
                                        'inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2),inset 0px -5px 0px 0px rgba(0, 0, 0, 0.3),inset 0px 2px 0px 0px rgba(255, 255, 255, 0.5)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                }}>
                                <IconButton size='small' onClick={handleMinus}>
                                    {' '}
                                    <RemoveIcon className={classes.icon} />
                                </IconButton>

                                <span style={{ fontFamily: 'lato' }}>
                                    {quantity}
                                </span>
                                <IconButton size='small' onClick={handlePlus}>
                                    {' '}
                                    <AddIcon className={classes.icon} />
                                </IconButton>
                            </div>
                        </div>
                        <div className={classes.btn} onClick={handleSubmit}>
                            <button className='button wood'>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.footer}>
                <Footer />
            </div>
        </div>
    );
}

export default BurgerDetails;
