import './App.css';
import React from 'react';
import Button from "./button";
import Number from "./Number";
import Temperature from "./temprature";
import Product from './product';
const number = [1,2,3,4,5]
const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.state = {isLoggedIn: false }
    }
    handleLoginClick(){
        this.setState( {isLoggedIn : true});
    }
    handleLogoutClick(){
        this.setState({isLoggedIn : false});
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let buttons;
        {isLoggedIn
            ? buttons = <Button onClick={this.handleLogoutClick} text="Logout" />
            : buttons = <Button onClick={this.handleLoginClick} text="Login" />
        }
        return (
            <div>
                <div className="container">
                    {buttons}
                </div>
                <div>
                    <Number numbers={number}/>
                </div>
                <div>
                    <Temperature />
                </div>
                <div className="container">
                    <Product products={PRODUCTS} />
                </div>
            </div>
        );
    }
}

export default LoginControl;
