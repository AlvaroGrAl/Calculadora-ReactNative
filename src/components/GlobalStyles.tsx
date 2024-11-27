import { StyleSheet } from "react-native";
import { colors } from "./colors"

export const GlobalStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.fondo,
        justifyContent: 'flex-end',
    },
    buttonsContainer: {
        paddingBottom: 20,
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        height: 90,
        width: 90,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    textbutton: {
        color: colors.text,
        fontSize: 32,
        fontWeight: "bold",
    },
    funciones: {
        backgroundColor: colors.funciones,
    },
    numeros: {
        backgroundColor: colors.numeros,
    },
    operaciones: {
        backgroundColor: colors.operaciones,
    },
    menu: {
        margin: 0,
        padding: 0,
    },
    pantalla: {
        color: colors.pantalla,
        textAlign: 'right',
        width: '90%',
    },
});