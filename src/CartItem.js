import React from 'react';

const CartItem = (props) => {
    const {price, title, qty, img} = props.product;
    const {
        product,
        onIncQty,
        onDecQty,
        onDelete
    } = props;
    return(
        <div className='cart-item'>
            <div className='left-block'>
                <img alt='' style={styles.image} src={img} />
            </div>
            <div className='right-block'>
                <div style={{fontSize: 25}}>{title}</div>
                <div style={{color: 'lightblack'}}>Rs {price}</div>
                <div style={{color: 'lightblack'}}>Qty: {qty}</div>
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

const styles = {
    image: {
        height: 120,
        width: 180,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;