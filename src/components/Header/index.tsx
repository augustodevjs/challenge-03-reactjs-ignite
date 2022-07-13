import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import logo from '../../assets/images/logo.svg';
import { Container, Cart } from './styles';
import { useCart } from '../../hooks/useCart';

const Header = (): JSX.Element => {
  const { cart } = useCart();
<<<<<<< HEAD
  console.log(cart);
  // const cartSize = // TODO;
=======

  const cartSize = cart.filter((data, index) => {
    return cart.indexOf(data) === index;
  })
>>>>>>> 9fb6bbd020ff76c273834a46cd8097fd9f02f912

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span data-testid="cart-size">
            {cartSize.length === 1 ? `${cartSize.length} item` : `${cartSize.length} itens`}
          </span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
};

export default Header;
