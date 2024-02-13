import styled, { css } from 'styled-components';

export const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid black;
color: black;
padding: 0.25em 1em;

  ${(props) =>
    props.highlight &&
    css`
      border: 3px solid #0000ffe7;
      `}
`;

export const IconBtn = styled.button`
background: transparent;
border: none;
margin: 0.5em 1em;
padding: 0.25em 1em;
font-size: 2em;

${(props) =>
  props.$cart &&
  css`
  background: transparent;
  border: none;
  `}
`;