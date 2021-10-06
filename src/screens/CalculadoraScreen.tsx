import React from 'react';
import {Text, View} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {styles} from '../theme/appTheme';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    numero,
    numeroAnterior,
    positivoNegativo,
    armarNumero,
    limpiar,
    btnDelete,
    btnDividir,
    btnMutiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="C" color="#9B9B9B" accion={limpiar}></BotonCalc>
        <BotonCalc
          texto="+/-"
          color="#9B9B9B"
          accion={positivoNegativo}></BotonCalc>
        <BotonCalc texto="del" color="#9B9B9B" accion={btnDelete}></BotonCalc>
        <BotonCalc texto="/" color="#FF9427" accion={btnDividir}></BotonCalc>
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="7" accion={armarNumero}></BotonCalc>
        <BotonCalc texto="8" accion={armarNumero}></BotonCalc>
        <BotonCalc texto="9" accion={armarNumero}></BotonCalc>
        <BotonCalc texto="X" color="#FF9427" accion={btnMutiplicar}></BotonCalc>
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="4" accion={armarNumero}></BotonCalc>
        <BotonCalc texto="5" accion={armarNumero}></BotonCalc>
        <BotonCalc texto="6" accion={armarNumero}></BotonCalc>
        <BotonCalc texto="-" color="#FF9427" accion={btnRestar}></BotonCalc>
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="1" accion={armarNumero}></BotonCalc>
        <BotonCalc texto="2" accion={armarNumero}></BotonCalc>
        <BotonCalc texto="3" accion={armarNumero}></BotonCalc>
        <BotonCalc texto="+" color="#FF9427" accion={btnSumar}></BotonCalc>
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="0" ancho accion={armarNumero}></BotonCalc>
        <BotonCalc texto="." accion={armarNumero}></BotonCalc>
        <BotonCalc texto="=" color="#FF9427" accion={calcular}></BotonCalc>
      </View>
    </View>
  );
};
