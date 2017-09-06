import styled from 'styled-components';
import colors from './colors';


const Header = styled.h1`
  position: relative;
  margin: 10px 0px;
  padding: 0;
  color: ${colors.lightblue};
  text-align: center;
  font-size: 1.4em;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  
  &:after {
    content: '';
    display: inline-block;
    height: 2px;
    width: 70px;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translate(-50%);
    background: ${colors.lightblue};
  }
`;

export default Header;
