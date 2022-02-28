import React from 'react';

class CartItem extends React.Component {

    render() {
        const {price, title, qty, img} = this.props.product;
        const {
            product,
            onIncQty,
            onDecQty,
            onDelete
        } = this.props;
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
                            onClick={() => onIncQty(product)}
                        />
                        <img 
                            alt='decrease'
                            className='action-icons'
                            src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
                            onClick={() => onDecQty(product)}
                        />
                        <img 
                            alt='delete'
                            className='action-icons'
                            src='https://cdn-icons-png.flaticon.com/512/3096/3096687.png'
                            onClick={() => onDelete(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 130,
        width: 130,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;