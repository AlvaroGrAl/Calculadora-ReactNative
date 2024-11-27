import { Pressable, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { GlobalStyle } from "./GlobalStyles";
import * as Haptics from 'expo-haptics';
import { Vibration } from "react-native";


interface Props {
  label: string;
  type: "funciones" | "operaciones" | "numeros" | "menu";
  onPress?: () => void;
  icon?: string;  // Primer icono

}

export const Botones = ({ label, type, onPress, icon }: Props) => {
  // Estilo condicional, asegurando que 'style' sea siempre un arreglo de estilos
  const buttonStyle: ViewStyle[] = [
    GlobalStyle.button,
    type === "funciones" ? GlobalStyle.funciones : type === "numeros" ? GlobalStyle.numeros : type === "operaciones" ? GlobalStyle.operaciones : GlobalStyle.menu,
  ];

  const vibrar = () => {
    // Activar vibración al presionar
    if (onPress) {
      onPress(); // Llamar a la función pasada por props
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    }
  };

  return (
    <Pressable style={buttonStyle} onPress={vibrar}>
      {icon ? (
        <Icon name={icon} size={42} color="#E0E0E3" />
      ) : (
        <Text style={GlobalStyle.textbutton}>{label}</Text>
      )}
    </Pressable>
  );
};
