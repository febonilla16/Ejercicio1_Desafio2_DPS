import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button, Text, HelperText, Snackbar, Modal, Portal, PaperProvider } from 'react-native-paper';
import AntDesign from '@expo/vector-icons/AntDesign';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const tipoVehiculo = [
        { label: 'Motocicleta', value: '1'},
        { label: 'Sedán', value: '2'},
        { label: 'Camioneta', value: '3'},
        { label: 'Microbús', value: '4'},
        { label: 'Bus', value: '5'},
    ];
    const [placa, setPlaca] = useState('');
    const [color, setColor] = useState('');
    const [año, setAño] = useState(0);
    const [marca, setMarca] = useState('');
    const tipoServicio = [
        { label: 'Lavado Básico', value: '1'},
        { label: 'Lavado Premium', value: '2'},
        { label: 'Lavado VIP', value: '3'},
        { label: 'Polarizado', value: '4'},
    ];

    const [costoServicio, setCostoServicio] = useState(0);
    const [total, setTotal] = useState(0);

    const handleNombreChange = (text) => {
        setNombre(text);
    };

    const handleSubmit = () => {
        const impuesto = 0.13;
        const propina = 0.05;
        if (nombre.trim() === '' || apellido.trim() === '' || placa.trim() === '' || color.trim() === '' || año.trim() === '' || marca.trim() === '') {
          alert('Todos los campos son obligatorios');
          return;
        }
        if (isNaN(parseInt(año))) {
          alert('No se aceptan letras');
          return;
        }
        if (!isNaN(parseInt(marca))) {
          alert('No se aceptan números');
          return;
        }
        if (!isNaN(parseInt(nombre))) {
          alert('No se aceptan números');
          return;
        }
        if (!isNaN(parseInt(apellido))) {
          alert('No se aceptan números');
          return;
        }
        
        switch (tipoServicio.value) {
            case '1':
                if (tipoVehiculo.value === '1') {
                    setCostoServicio(2.00);
                } else if (tipoVehiculo.value === '2') {
                    setCostoServicio(3.00);
                } else if (tipoVehiculo.value === '3') {
                    setCostoServicio(4.00);
                } else if (tipoVehiculo.value === '4') {
                  setCostoServicio(5.00);
                } else {
                  setCostoServicio(6.00);
                } 
                break;
            case '2':
              if (tipoVehiculo.value === '1') {
                setCostoServicio(2.50);
              } else if (tipoVehiculo.value === '2') {
                setCostoServicio(3.50);
              } else if (tipoVehiculo.value === '3') {
                setCostoServicio(4.50);
              } else if (tipoVehiculo.value === '4') {
              setCostoServicio(5.50);
              } else {
              setCostoServicio(6.50);
              } 
              break;
            case '3':
              if (tipoVehiculo.value === '1') {
                setCostoServicio(3.00);
              } else if (tipoVehiculo.value === '2') {
                  setCostoServicio(4.00);
              } else if (tipoVehiculo.value === '3') {
                  setCostoServicio(5.00);
              } else if (tipoVehiculo.value === '4') {
                setCostoServicio(6.00);
              } else {
                setCostoServicio(7.00);
              } 
              break;
            case '4':
              if (tipoVehiculo.value === '1') {
                //alert
              } else if (tipoVehiculo.value === '2') {
                  setCostoServicio(25.00);
              } else if (tipoVehiculo.value === '3') {
                  setCostoServicio(35.00);
              } else if (tipoVehiculo.value === '4') {
                setCostoServicio(45.00);
              } else {
                setCostoServicio(60.00);
              } 
              break;
            default:
                break;
        }
        setTotal(((costoServicio*propina) + (costoServicio*impuesto) + costoServicio).toFixed(2));
    };

    const [value, setValue] = useState(null);

    const renderItem = item => {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.label}</Text>
          {item.value === value && (
            <AntDesign
              style={styles.icon}
              color="black"
              name="Safety"
              size={20}
            />
          )}
        </View>
      );
    };

  return (
    <ScrollView style={styles.scrollView}>
      <Text variant='headlineSmall' style={styles.title}>Servicio a contratar</Text>
      <Text>Datos personales</Text>
      <TextInput
        label="Nombre"
        value={nombre}
        onChangeText={text => setNombre(text)}
        mode='outlined'
        numberOfLines={1}
      />
      <TextInput
        label="Apellido"
        value={apellido}
        onChangeText={text => setApellido(text)}
        mode='outlined'
        numberOfLines={1}
      />
      <Text>Datos del vehículo</Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={tipoVehiculo}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Seleccione un tipo de vehículo"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        )}
        renderItem={renderItem}
      />
      <TextInput
        label="Placa"
        value={placa}
        onChangeText={text => setPlaca(text)}
        mode='outlined'
        numberOfLines={1}
      />
      <TextInput
        label="Color"
        value={color}
        onChangeText={text => setColor(text)}
        mode='outlined'
        numberOfLines={1}
      />
      <TextInput
        label="Año"
        value={año}
        onChangeText={text => setAño(text)}
        mode='outlined'
        numberOfLines={1}
      />
      <TextInput
        label="Placa"
        value={marca}
        onChangeText={text => setMarca(marca)}
        mode='outlined'
        numberOfLines={1}
      />
      <Text>Tipo de servicio</Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={tipoServicio}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Seleccione un tipo de servicio"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        )}
        renderItem={renderItem}
      />
      <Button icon="send-lock" mode="contained" onPress={() => handleSubmit()}>
        Enviar
      </Button>
    </ScrollView> 
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  }
});

export default Formulario;