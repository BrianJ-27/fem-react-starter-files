import React from "react";
import styled, { css } from "styled-components";

const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;

  ${(props) =>
    props.avatar &&
    css`
      border-radius: 50%;
      height: 50px;
      width: 50px;
      border: 1px solid blue;
    `};
`;

const CustomImage = () => <Image src="" alt="custom image" />;

export default CustomImage;
