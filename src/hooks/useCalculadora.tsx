import { useRef, useState, useEffect } from 'react';

enum Operadores {
    sumar = '+',
    restar = '-',
    multiplicar = '*',
    dividir = '/',
    porcentaje = '%',
}

export const useCalculadora = () => {
    const [formula, setFormula] = useState('0');
    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');

    const UltimaOperacion = useRef<Operadores>();

    useEffect(() => {
        if (UltimaOperacion.current) {
            const primeraParteFormula = formula.split(' ').at(0);
            setFormula(`${primeraParteFormula} ${UltimaOperacion.current} ${numero}`);
        } else {
            setFormula(numero);
        }
    }, [numero]);

    useEffect(() => {
        const resultado = calcularResultado();
        setNumeroAnterior(`${resultado}`);
    }, [formula]);

    const clean = () => {
        setFormula('0');
        setNumero('0');
        setNumeroAnterior('0');
        UltimaOperacion.current = undefined;
    };

    const cambiarSigno = () => {
        if (numero.includes('-')) {
            return setNumero(numero.replace('-',''));
        } else {
            return setNumero('-' + numero);
        }
    };

    const borrarDigito = () => {
        let signo = '';
        let numeroTemporal = numero;

        if (numero.includes('-')) {
            signo = '-';
            numeroTemporal = numero.substring(1);
        }
        if (numeroTemporal.length > 1) {
            return setNumero(signo + numeroTemporal.slice(0, -1));
        } else {
            return setNumero('0');
        }
    };

    const establecerUltimoNumero = () => {
        resultado();
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1));
        }
        setNumeroAnterior(numero);
        setNumero('0');
    };

    const calcularResultado = () => {
        const [primerValor, operacion, segundoValor] = formula.split(' ');

        const num1 = Number(primerValor);
        const num2 = Number(segundoValor);

        if (isNaN(num2)) return num1;

        switch (operacion) {
            case Operadores.sumar:
                return num1 + num2;

            case Operadores.restar:
                return num1 - num2;

            case Operadores.multiplicar:
                return num1 * num2;

            case Operadores.dividir:
                // Validar si el divisor es cero
                if (num2 === 0) {
                    return ''; // Retornar 'Error' si se intenta dividir por cero
                }
                return num1 / num2;

            case Operadores.porcentaje:
                return num1 / 100 * num2;

            default:
                throw new Error(`La operación ( ${operacion} ) no está implementada`);
        }
    };

    
    const atras = () => {
        if (numero.length > 1) {
            setNumero(numero.slice(0, -1));
        } else {
            setNumero('0');
        }
    };

    const resultado = () => {
        const resultado = calcularResultado();
        // Si el resultado es 'Error', mostramos el mensaje de error
        if (resultado === '') {
            setFormula('Error');
            setNumero('0');
        } else {
            setFormula(`${resultado}`);
            setNumero(`${resultado}`);
        }
        UltimaOperacion.current = undefined;
        setNumeroAnterior('0');
    };

    const construirNumero = (teclaNumero: string) => {
        // Verificar si se escribe el punto decimal
        if (numero.includes('.') && teclaNumero === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            if (teclaNumero === '.') {
                return setNumero(numero + teclaNumero);
            }

            if (teclaNumero === '0' && numero.includes('.')) {
                return setNumero(numero + teclaNumero);
            }
            // Verificar si es diferente a cero, no hay punto y es el primer número
            if (teclaNumero !== '0' && !numero.includes('.')) {
                return setNumero(teclaNumero);
            }
            if (teclaNumero === '0' && !numero.includes('.')) {
                return;
            }
        }
        return setNumero(numero + teclaNumero);
    };

    const operaciones = (signo: Operadores) => {
        establecerUltimoNumero();
        UltimaOperacion.current = signo;
    };
    return {
        // Propiedades
        formula,
        numero,
        numeroAnterior,
        Operadores,
        // Métodos
        construirNumero,
        operaciones,
        clean,
        cambiarSigno,
        atras,
        borrarDigito,
        calcularResultado,
        resultado,
    };
};
