import React from "react";

const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <span style={styles.heading}>My Cart</span>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} alt="cart-icon" src="https://cdn-icons-png.flaticon.com/512/3737/3737151.png" />
                <span style={styles.cartCount}> {props.count} </span>
            </div>
        </div>
    )
}

const styles = {
    heading: {
        color: 'white',
        position: 'absolute',
        fontSize: 40,
        left: '46%'
    },
    cartIcon: {
        height: 45,
        marginRight: 20,
        color: 'white',
    },
    nav: {
        height: 65,
        background: 'black',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative',
        right: 10,
        top: 4
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '3px 9px',
        position: 'absolute',
        right: 9,
        top: -4
    }
}

export default Navbar;