import styled from 'styled-components';

export const Header = styled.div`
  width: 50%;
  padding: 20px;
  border: 1px solid #000;
  /* border-radius: 5px; */
  margin: 20px auto 20px;
  background-color: #b7c4cf;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

export const NavBarDiv = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: flex-start; */
  align-items: center;

  & > a {
    text-decoration: none;
    color: #000;
    margin: 0 10px;
    padding: 5px;
    font-family: sans-serif;
  }
`;

export const ButtonsDiv = styled.div`
  /* display: flex; */
  /* flex-direction: row; */
  /* align-self: flex-end; */
  margin-left: auto;
`;

export const Button = styled.button`
  /* display: flex; */
  /* align-self: flex-end; */

  padding: 5px;
  border-radius: 2px;
  cursor: pointer;
`;
