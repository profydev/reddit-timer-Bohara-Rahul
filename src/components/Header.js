import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../logo.svg';

const Header = () => (
  <Wrapper>
    <Link to="/">
      <img src={Logo} alt="logo" />
    </Link>
    <nav>
      <ul>
        <li><Link to="/search/javascript">Search</Link></li>
        <li><a href="#how-it-works">How it works</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  </Wrapper>
);

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 76px;
    ul {
        display: flex;
        list-style: none;
    }
    li {
        padding: 26px;
    }
    a {
        text-decoration: none;
        color: var(--text-clr);
        font-size: 16px;
        font-family: "Montserrat-Regular", serif;
        line-height: 19.5px;
    }
`;

export default Header;
