import React from 'react';
import '../App.css';
import Logo from "../icons/logo";
import Cart from "../icons/cart";

const NavBar: React.FC = () => {
    return (
        <nav>
            <div className={"nav__wrapper-menu"}>
                <div>
                    <Logo/>
                </div>
                <ul>
                    <li><a href="#">Каталог</a></li>
                    <li><a href="#">О фабрике</a></li>
                    <li><a href="#">Блог</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </div>
            <div className={"nav__cart"}>
                <Cart/>
            </div>
        </nav>
    )
}

export default NavBar