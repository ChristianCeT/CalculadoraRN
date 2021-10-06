import {useRef, useState} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const armarNumero = (numeroTexto: string) => {
    // No aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      // Punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
      }
      // evaluar si es otro cero y hay un punto
      else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
      }
      //evaluar si diferente de cero y no tiene un punto
      else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
      }
      //evitar el 0000.0
      else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const btnDelete = () => {
    if (numero.startsWith('-') && numero.length === 2) {
      setNumero('0');
    } else if (numero.length > 1) {
      setNumero(numero.substring(0, numero.length - 1));
    } else if (numero.length > 1 && numero.includes('-')) {
      setNumero(numero.substring(0, numero.length - 1));
    } else {
      setNumero('0');
    }
  };

  const cambiarNumPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1)); // cortar el ultimo dato con el slice
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const btnDividir = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };

  const btnMutiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };

  const btnRestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  };

  const btnSumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };

  const calcular = () => {
    let resultado = 0;
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);
        break;

      case Operadores.restar:
        resultado = num2 - num1;
        setNumero(`${resultado}`);
        break;

      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        break;

      case Operadores.dividir:
        resultado = num2 / num1;
        resultado.toString() === 'NaN'
          ? setNumero('Divisón no válida')
          : setNumero(`${resultado}`);
        break;
    }

    setNumeroAnterior('0');
  };

  return {
    numero,
    numeroAnterior,
    armarNumero,
    positivoNegativo,
    limpiar,
    btnDelete,
    btnDividir,
    btnMutiplicar,
    btnRestar,
    btnSumar,
    calcular,
  };
};
