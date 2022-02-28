import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Phone',
                    qty: 3,
                    img: '',
                    id: 2
                },
                {
                    price: 999,
                    title: 'Laptop',
                    qty: 1,
                    img: '',
                    id: 3
                }
            ]
        }
    }

    incQty = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            products
        });
    }

    decQty = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);

        if (products[index].qty === 0){
            return;
        }

        products[index].qty -= 1;

        this.setState({
            products
        });
    }
    
    delProduct = (id) => {
        const {products} = this.state;

        const items = products.filter((item) => item.id !== id);

        this.setState({
            products: items
        });
    }

    render() {
        const {products} = this.state;
        return (
            <div className="cart">
                {
                    products.map((product) => {
                        return (
                            <CartItem
                                product={product}
                                key={product.id}
                                onIncQty={this.incQty}
                                onDecQty={this.decQty}
                                onDelete={this.delProduct}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default Cart;