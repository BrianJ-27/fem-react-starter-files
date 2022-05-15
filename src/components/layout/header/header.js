import React from "react";
import styled from "styled-components";

const Header = styled.header``;

const CustomHeader = () => {
  return (
    <Header>
      <h1>Main Page Title</h1>
      <div></div>
      <img src="mdn-logo-sm.png" alt="Header logo" />
    </Header>
  );
};

export default CustomHeader;
