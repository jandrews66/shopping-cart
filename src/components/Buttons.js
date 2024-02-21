import styled, { css } from 'styled-components';

export const Button = styled.button`
background-color: rgba(81, 111, 172, 0.569);
border: 2px solid rgba(81, 111, 172, 0.569);
color: white;
padding: 0.5em 2em;
cursor: pointer;
max-width: fit-content;
transition-duration: 0.2s ease;
&:hover {
  background-color: rgba(81, 111, 172, 1);
}
&:active {
  box-shadow: 0 2px #666;
  transform: translateY(2px);
}
  ${(props) => props.$invert && css`
      border: 2px solid white;
      background-color: transparent;
      color: white;
      &:hover {
        transform: scale(1.02); 
        background-color: transparent;
      }
      &:active{
        background-color: rgba(81, 111, 172, 1);
        box-shadow: 0 0 0;
      }
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

export const CartCount = styled.span`
font-size: 0.4em; /* Adjust the font size as needed */
color: white;
background-color: #0000ffe7;
border: 3px solid #0000ffe7;
padding: 0 0.3em;
margin-left: -0.6em;
border-radius: 20px;
`;
