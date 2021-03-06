import { Link } from 'react-router';
import styled from 'styled-components';

const CallToActionButton = styled(Link)`
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background: ${(props) => (props.background ? props.background : 'none')};
  cursor: pointer;
  padding: ${(props) => (props.medium ? '8px 50px' : '25px 80px')};
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  outline: none;
  position: relative;
  transition: all 0.3s;
  text-decoration: none;
  border: 3px solid #fff;
  color: ${(props) => (props.background ? '#5cbb2f' : '#fff')};

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    transition: all 0.3s;
  }


  &:hover {
    color: #5cbb2f;
    background: ${(props) => (props.background ? '#f4f8f1' : '#fff')};
  }

  &:active {
    color: #0e83cd;
    background: #fff;
  }
`;

export default CallToActionButton;
