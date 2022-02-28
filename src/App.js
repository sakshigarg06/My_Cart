import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
          id: 1
        },
        {
          price: 9999,
          title: 'Smartphone',
          qty: 3,
          img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHNtYXJ0cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
          id: 2
        },
        {
          price: 99999,
          title: 'Laptop',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
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

  getCartCount = () => {
    const {products} = this.state;

    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal += product.qty * product.price;
    })

    return cartTotal;
  }

  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products = {products}
          onIncQty={this.incQty}
          onDecQty={this.decQty}
          onDelete={this.delProduct}
        />
        <span style={styles.total}>
          CART TOTAL: Rs {this.getCartTotal()}
          <button style={styles.button} type='submit' >Checkout</button>
        </span>
      </div>
    );
  }
}

const styles = {
  total: {
    fontSize: 30,
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '40px'
  },
  button: {
    fontSize: 25,
    padding: "5px 15px",
    borderRadius: "18px",
    background: 'black',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '45px'
  }
}

export default App;
