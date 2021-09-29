import React, { useContext, useState, useEffect } from 'react';
import { data } from './utilitis';

const GlobalContext = React.createContext();

const getFromLocalStorage = () => {
    const items = JSON.parse(window.localStorage.getItem('burger-cart'));

    if (items) {
        return items;
    } else {
        return [];
    }
};

export const GlobalProvider = ({ children }) => {
    const [state, setstate] = useState({
        data: [],
        filteredData: [],
        curFilter: 'All',
        cartItems: getFromLocalStorage(),
    });

    const saveToLocalStorage = (item) => {
        window.localStorage.setItem('burger-cart', JSON.stringify(item));
    };

    // store to localstorage
    useEffect(() => {
        saveToLocalStorage(state.cartItems);
    }, [state.cartItems]);

    useEffect(() => {
        setstate((prev) => {
            return { ...prev, data: data };
        });
    }, []);

    useEffect(() => {
        filterFoods(state.curFilter);
    }, []);

    useEffect(() => {
        filterFoods(state.curFilter);
    }, [state.curFilter]);

    const getTypes = () => {
        const Alltypes = state.data.map((curObj) => curObj.type);

        const types = ['All', ...new Set(Alltypes)];

        const newTypes = types.map((cur) => {
            return cur.charAt(0).toUpperCase() + cur.slice(1);
        });

        return newTypes;
    };

    const changeFilterName = (newName) => {
        setstate((prev) => {
            return { ...prev, curFilter: newName };
        });
    };

    const filterFoods = (curData) => {
        if (curData === 'All') {
            setstate((prev) => {
                return { ...prev, filteredData: data };
            });
        } else {
            setstate((prev) => {
                return {
                    ...prev,
                    filteredData: data.filter((curObj) => {
                        let revampName = curObj.type.toLowerCase();
                        let stateName = curData.toLowerCase();
                        if (revampName === stateName) {
                            return curObj;
                        }
                    }),
                };
            });
        }
    };

    const getTheItem = (id) => {
        const theItem = data.filter((curObj) => curObj.id === id);
        return theItem;
    };

    const addItemToCart = (item) => {
        if (state.cartItems.length === 0) {
            setstate((prev) => {
                return { ...prev, cartItems: [...prev.cartItems, item] };
            });
        } else {
            let found = [];
            state.cartItems.forEach((curObj) => {
                if (curObj.id === item.id) {
                    found.push(curObj);
                }
            });

            if (found.length > 0) {
                const newCart = state.cartItems.map((curObj) => {
                    if (curObj.id === item.id) {
                        return {
                            ...curObj,
                            quantity: curObj.quantity + item.quantity,
                        };
                    } else {
                        return curObj;
                    }
                });

                setstate((prev) => {
                    return { ...prev, cartItems: newCart };
                });
            } else {
                setstate((prev) => {
                    return { ...prev, cartItems: [...prev.cartItems, item] };
                });
            }
        }
    };

    const changeQuantity = (itemId, newQuantity) => {
        const newCartItems = state.cartItems.map((curObj) => {
            if (curObj.id === itemId) {
                return { ...curObj, quantity: newQuantity };
            } else {
                return curObj;
            }
        });

        setstate((prev) => {
            return { ...prev, cartItems: newCartItems };
        });
    };

    const deleteItem = (id) => {
        setstate((prev) => {
            return {
                ...prev,
                cartItems: prev.cartItems.filter(
                    (curItem) => curItem.id !== id
                ),
            };
        });
    };

    return (
        <GlobalContext.Provider
            value={{
                data: state.data,
                getTypes,
                changeFilterName,
                curFilter: state.curFilter,
                filteredData: state.filteredData,
                getTheItem,
                addItemToCart,
                cartItems: state.cartItems,
                changeQuantity,
                deleteItem,
            }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobal = () => {
    return useContext(GlobalContext);
};
