import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }

    incQty = () => {
        this.setState((prev) => {
            return {
                qty: prev.qty + 1
            }
        });
    }

    decQty = () => {
        const {qty} = this.state;

        if(qty === 0) {
            return;
        }
        
        this.setState((prev) => {
            return {
                qty: prev.qty - 1
            }
        });
    }

    render() {
        const {price, title, qty, img} = this.state;
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img alt='' style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        <img 
                            alt='increase'
                            className='action-icons'
                            src='https://cdn-icons-png.flaticon.com/512/992/992651.png'
                            onClick={this.incQty}
                        />
                        <img 
                            alt='decrease'
                            className='action-icons'
                            src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
                            onClick={this.decQty}
                        />
                        <img 
                            alt='delete'
                            className='action-icons'
                            src='https://cdn-icons-png.flaticon.com/512/3096/3096687.png'
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;