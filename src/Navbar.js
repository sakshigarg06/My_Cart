import React from "react";

const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.heading}>My Cart</div>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} alt="cart-icon" src="https://cdn-icons-png.flaticon.com/512/3737/3737151.png" />
                <span style={styles.cartCount}>3</span>
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
        height: 70,
        background: 'black',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 7,
        top: -7
    }
}

export default Navbar;