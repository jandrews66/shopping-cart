import styled, { css } from 'styled-components';

export const Button = styled.button`
background-color: rgba(81, 111, 172, 0.569);
border: 2px solid rgba(81, 111, 172, 0.569);
color: white;
padding: 0.5em 2em;
margin: 0em 1em;
cursor: pointer;
max-width: fit-content;

  ${(props) =>
    props.highlight &&
    css`
      border: 2px solid darkblue;
      `}
`;

export const IconBtn = styled.button`
background: transparent;
border: none;
font-size: 2em;
cursor: pointer;


${(props) =>
  props.$cart &&
  css`
  background: transparent;
  border: none;
  `}
`;