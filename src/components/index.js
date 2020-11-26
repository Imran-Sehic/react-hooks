import styled from 'styled-components';

export const Layout = styled.div`
  height: ${props => props.height ? props.height : ""};
  width: ${props => props.width ? props.width : ""};
  background: ${props => props.background ? props.background : "white"};
  display: ${props => props.display ? props.display : ""};
  align-items: ${props => props.alignItems ? props.alignItems : ""};
  justify-content: ${props => props.justifyContent ? props.justifyContent : ""};
  margin: ${props => props.margin ? props.margin : ""};
  padding: ${props => props.padding ? props.padding : ""};
  flex-direction: ${props => props.flexDirection ? props.flexDirection : ""};
  border-radius: ${props => props.borderRadius ? props.borderRadius : ""};
  box-shadow: ${props => props.boxShadow ? props.boxShadow : ""};
  border: ${props => props.border ? props.border : ""};
  min-width: ${props => props.minWidth ? props.minWidth : ""};
  max-height: ${props => props.maxHeight ? props.maxHeight : ""};
  z-index: ${props => props.zIndex ? props.zIndex : ""};
  position: ${props => props.position ? props.position : ""};
`;

export const Btn = styled.button`
  background: ${props => props.background ? props.background : "orange"};
  height: ${props => props.height ? props.height : ""};
  width: ${props => props.width ? props.width : ""};
  font-size: ${props => props.fontSize ? props.fontSize : "1.5rem"};;
  text-transform: ${props => props.textTransform ? props.textTransform : ""};
  padding: ${props => props.padding ? props.padding : ""};
  border-radius: ${props => props.borderRadius ? props.borderRadius : ""};
  margin: ${props => props.margin ? props.margin : ""};
  color: ${props => props.color ? props.color : ''};
  border: ${props => props.border ? props.border : ""};
  position: ${props => props.position ? props.position : ""};
  top: ${props => props.top ? props.top : ""};
`;

export const Text = styled.span`
  text-align: ${props => props.textAlign ? props.textAlign : ""};
  font-size: ${props => props.fontSize ? props.fontSize : ""};
  margin: ${props => props.margin ? props.margin : ""};
  font-family: ${props => props.fontFamily ? props.fontFamily : 'Poppins, arial, sans-serif'};
  color: ${props => props.color ? props.color : ''};
  text-decoration: ${props => props.textDecoration ? props.textDecoration : ''};
`;

export const InputField = styled.input`
  background: ${props => props.background ? props.background : ""};
  height: ${props => props.height ? props.height : ""};
  width: ${props => props.width ? props.width : ""};
  font-size: ${props => props.fontSize ? props.fontSize : ""};;
  text-transform: ${props => props.textTransform ? props.textTransform : ""};
  padding: ${props => props.padding ? props.padding : ""};
  border-radius: ${props => props.borderRadius ? props.borderRadius : ""};
  margin: ${props => props.margin ? props.margin : ""};
  color: ${props => props.color ? props.color : ''};
  border: ${props => props.border ? props.border : ""};
  position: ${props => props.position ? props.position : ""};
  top: ${props => props.top ? props.top : ""};
`
