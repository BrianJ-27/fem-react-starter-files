import React from "react";
import styled from "styled-components";

const MainNavigation = styled.nav`
  ul {
    list-style: none;
  }
  li {
    display: flex;
  }
  &:link {
    color: var(--clr-accent-color);
  }
  &:visited {
    color: var(--clr-primary-color);
  }
  &:hover {
    color: var(--clr-accent-color);
  }
  &:active {
    color: var(--clr-primary-color);
    text-decoration: none;
  }
  &:focus {
    color: blue;
  }
`;

const CustomMainNav = () => {
  return (
    <MainNavigation aria-label="Main Navigation">
      <ul>
        <li>
          <a href="#1">Home</a>
        </li>
        <li class="main-nav__item">
          <a href="#2">Work</a>
        </li>
        <li class="main-nav__item">
          <a href="#3">About us</a>
        </li>
      </ul>
    </MainNavigation>
  );
};

export default CustomMainNav;
