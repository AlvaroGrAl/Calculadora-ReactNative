import { Text, type TextProps, StyleSheet } from 'react-native';
import { GlobalStyle } from "./GlobalStyles";

interface Props extends TextProps {
  fontSize?: number;
};

export const Pantalla2 = ({children, fontSize = 20, ...rest}:Props) => {
  return (
    <Text style={[GlobalStyle.pantalla, {fontSize}]} numberOfLines={1} adjustsFontSizeToFit {...rest}>
        {children}
    </Text>
  )
}
