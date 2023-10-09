import React from 'react'
import {View, Text,StyleSheet} from 'react-native'

function Servicio({item}) {
  const {nombre, apellido, año, color, placa, marca, costoServicio, total} = item
  return (
   <View style={styles.contenedor}>
    <View style={styles.contenedorTextoFila}>
      <Text style={styles.bold}>Nombre:</Text><Text> {nombre + ' '+ apellido}</Text>
    </View>
    <View style={styles.contenedorTexto}>
      <View style={styles.contenedorTextoFila}>
        <Text>Vehículo</Text>
        <Text style={styles.bold}>Tipo Vehiculo:</Text><Text>Sedán</Text>
        <Text style={styles.bold}>Marca:</Text><Text>{marca}</Text>
        <Text style={styles.bold}>Año:</Text><Text>{año}</Text>
        <Text style={styles.bold}>Placa:</Text><Text>{placa}</Text>
        <Text style={styles.bold}>Color:</Text><Text>{color}</Text>
      </View>
      <View style={styles.contenedorTextoFila}>
        <Text style={styles.bold}>costoServicio: </Text><Text>$ {costoServicio}</Text>
      </View>
    </View>
    <View style={styles.contenedorTexto}>
      <View style={styles.contenedorTextoFila}>
        <Text style={styles.bold}>{categoria}</Text>
      </View>
      <View style={styles.contenedorTextoFila}>
        <Text style={styles.bold}>Total:</Text><Text>$ {total}</Text>
      </View>
    </View>
   </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#E3F7CA',
    padding: 20,
    borderBottomColor: '#94A3B8',
    borderBottomWidth: 1,
    marginVertical: 5,
    justifyContent: 'space-between'
  },contenedorTexto: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },bold: {
    fontWeight: 'bold',
  },contenedorTextoFila:{
    flexDirection: 'row',
  }
})
export default Servicio;