import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Pantalla2 } from './src/components/Pantalla2';
import { Botones } from './src/components/Botones';
import { useCalculadora } from './src/hooks/useCalculadora';
import { GlobalStyle } from "./src/components/GlobalStyles";

export default function App() {

  const { formula, numeroAnterior, construirNumero, clean,
    cambiarSigno, Operadores, operaciones
    , resultado, atras } = useCalculadora();  
  
  return (
    <View style={GlobalStyle.container}>
      <Pantalla2 fontSize={70}>{formula}</Pantalla2>

      {formula === numeroAnterior ? (
        <Pantalla2 fontSize={40}> </Pantalla2>
      ) : (
        <Pantalla2 fontSize={40}>{numeroAnterior}</Pantalla2>
      )}

      <View style={GlobalStyle.buttonsContainer}>
        <View style={GlobalStyle.fila}>
          <Botones label="AC" type="funciones" onPress={(clean)} />
          <Botones icon="arrowleft" type="funciones" onPress={(atras)} label={''} />
          <Botones label="%" type="funciones" onPress={() => operaciones(Operadores.porcentaje)} />
          <Botones label="÷" type="operaciones" onPress={() => operaciones(Operadores.dividir)} />
        </View>
        <View style={GlobalStyle.fila}>
          <Botones label='7' type="numeros" onPress={() => construirNumero('7')}></Botones>
          <Botones label='8' type="numeros" onPress={() => construirNumero('8')}></Botones>
          <Botones label='9' type="numeros" onPress={() => construirNumero('9')}></Botones>
          <Botones label='×' type="operaciones" onPress={() => operaciones(Operadores.multiplicar)} />
        </View>
        <View style={GlobalStyle.fila}>
          <Botones label='4' type="numeros" onPress={() => construirNumero('4')}></Botones>
          <Botones label='5' type="numeros" onPress={() => construirNumero('5')}></Botones>
          <Botones label='6' type="numeros" onPress={() => construirNumero('6')}></Botones>
          <Botones label='-' type="operaciones" onPress={() => operaciones(Operadores.restar)} />
        </View>
        <View style={GlobalStyle.fila}>
          <Botones label='1' type="numeros" onPress={() => construirNumero('1')}></Botones>
          <Botones label='2' type="numeros" onPress={() => construirNumero('2')}></Botones>
          <Botones label='3' type="numeros" onPress={() => construirNumero('3')}></Botones>
          <Botones label='+' type="operaciones" onPress={() => operaciones(Operadores.sumar)} />
        </View>
        <View style={GlobalStyle.fila}>
          <Botones label='±' type="numeros" onPress={(cambiarSigno)} />
          <Botones label='0' type="numeros" onPress={() => construirNumero('0')}></Botones>
          <Botones label='.' type="numeros" onPress={() => construirNumero('.')}></Botones>
          <Botones label='=' type="operaciones" onPress={(resultado)}></Botones>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
