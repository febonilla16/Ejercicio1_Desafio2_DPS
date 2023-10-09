import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Image, Pressable, Modal, FlatList } from 'react-native';
import { TextInput, Button, Text, HelperText, Snackbar, Portal, PaperProvider } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import Servicio from './Servicio';

const Formulario = ({modalVisible,setModalVisible}) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [placa, setPlaca] = useState('');
    const [color, setColor] = useState('');
    const [año, setAño] = useState(0);
    const [marca, setMarca] = useState('');
    const tipoService = [
        { label: 'Lavado Básico', value: '1'},
        { label: 'Lavado Premium', value: '2'},
        { label: 'Lavado VIP', value: '3'},
        { label: 'Polarizado', value: '4'},
    ];
    const tipoCar = [
      { label: 'Motocicleta', value: '1'},
      { label: 'Sedán', value: '2'},
      { label: 'Camioneta', value: '3'},
      { label: 'Microbús', value: '4'},
      { label: 'Bus', value: '5'},
  ];

    const [vehiculo, setVehiculo] = useState('');
    const [service, setService] = useState('');

    const [tipoVehiculo, setTipoVehiculo] = useState('');
    const [tipoServicio, setTipoServicio] = useState('');

    const [costoServicio, setCostoServicio] = useState(0);
    const [total, setTotal] = useState(0);

    const [servicios, setServicios] = useState([]);

    useEffect(() => {
      setTotal(((costoServicio*0.05) + (costoServicio*0.13) + costoServicio).toFixed(2));
  }, [vehiculo,service,costoServicio]);

    const handleVehiculo = (value) => {
      setTipoVehiculo(value);
      switch (value) {
        case '1':
          setVehiculo('Motocicleta');
          break;
          case '2':
            setVehiculo('Sedán');
          break;
          case '3':
            setVehiculo('Camioneta');
          break;
          case '4':
            setVehiculo('Microbús');
          break;
          case '5':
            setVehiculo('Bus');
          break;
      }
    }

    const handleServicio = (value) => {
      setTipoServicio(value);
      switch (value) {
        case '1':
          setService('Lavado Básico');
            if (vehiculo === '1') {
                setCostoServicio(2.00);
            } else if (vehiculo === '2') {
                setCostoServicio(3.00);
            } else if (vehiculo === '3') {
                setCostoServicio(4.00);
            } else if (vehiculo === '4') {
              setCostoServicio(5.00);
            } else {
              setCostoServicio(6.00);
            } 
            break;
        case '2':
          setService('Lavado Premium');
          if (vehiculo === '1') {
            setCostoServicio(2.50);
          } else if (vehiculo === '2') {
            setCostoServicio(3.50);
          } else if (vehiculo === '3') {
            setCostoServicio(4.50);
          } else if (vehiculo === '4') {
          setCostoServicio(5.50);
          } else {
          setCostoServicio(6.50);
          } 
          break;
        case '3':
          setService('Lavado VIP');
          if (vehiculo === '1') {
            setCostoServicio(3.00);
          } else if (vehiculo === '2') {
              setCostoServicio(4.00);
          } else if (vehiculo === '3') {
              setCostoServicio(5.00);
          } else if (vehiculo === '4') {
            setCostoServicio(6.00);
          } else {
            setCostoServicio(7.00);
          } 
          break;
        case '4':
          setService('Polarizado');
          if (vehiculo === '1') {
            alert('No aplica el polarizado para motocicleta');
            return;
          } else if (vehiculo === '2') {
              setCostoServicio(25.00);
          } else if (vehiculo === '3') {
              setCostoServicio(35.00);
          } else if (vehiculo === '4') {
            setCostoServicio(45.00);
          } else {
            setCostoServicio(60.00);
          } 
          break;
          default:
            break;
    }
    }

    const handleSubmit = () => {
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

        const nuevoServicio = {
          id : Date.now(),
          nombre,
          apellido,
          año,
          color,
          placa,
          marca,
          vehiculo,
          service,
          costoServicio,
          total
        }

        setServicios([...servicios, nuevoServicio]);
        setModalVisible(!modalVisible);

        setNombre('');
        setApellido('');
        setAño(0);
        setPlaca('');
        setColor('');
        setMarca('');
        setTipoServicio('');
        setTipoVehiculo('');
    };

    const handleModal = () =>{
      setModalVisible(!modalVisible)
    };

  return (
    <>
      <Text variant='headlineSmall' style={styles.title}>Servicio a contratar</Text>
      <Text>Datos personales</Text>
      <TextInput
        label="Nombre"
        value={nombre}
        onChangeText={setNombre}
        mode='outlined'
        numberOfLines={1}
      />
      <TextInput
        label="Apellido"
        value={apellido}
        onChangeText={setApellido}
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
        data={tipoCar}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder='Seleccione el tipo de vehiculo'
        value={tipoVehiculo}
        onChange={item => {
          handleVehiculo(item.value);
        }}
      />
      <TextInput
        label="Placa"
        value={placa}
        onChangeText={setPlaca}
        mode='outlined'
        numberOfLines={1}
      />
      <TextInput
        label="Color"
        value={color}
        onChangeText={setColor}
        mode='outlined'
        numberOfLines={1}
      />
      <TextInput
        label="Año"
        value={año}
        onChangeText={setAño}
        mode='outlined'
        numberOfLines={1}
      />
      <TextInput
        label="Marca"
        value={marca}
        onChangeText={setMarca}
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
        data={tipoService}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder='Seleccione el tipo de servicio'
        value={tipoServicio}
        onChange={item => {
          handleServicio(item.value);
        }}
      />
      <Button icon="send-lock" mode="contained" onPress={() => handleSubmit()}>
        Enviar
      </Button>

      <Modal animationType='slide' visible={modalVisible}>
        <View style={styles.contenedor}>
          <Pressable style={styles.btnAtras} onPress={handleModal}>
            <Text style={styles.btnText}></Text>
            <Image source={require('../../img/arrow-left.png')} style={styles.imagen}/>
          </Pressable>
            <Text style={styles.listaServicios}>Lista de servicios agendados</Text>  
            {servicios.length === 0 ? <Text>No hay servicios registrados</Text>: 
          <FlatList
            style={styles.listadoServicios}
            data={servicios}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return(
                <Servicio
                item={item}/>
              )
            }}
            />
          }
        </View>
      </Modal>
    </>
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
  },
  label: {
    color:'black', 
    marginHorizontal:3,
    marginBottom:10,
    marginTop: 15,
    fontSize:20,
    fontWeight:'600'},
  input: {
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginHorizontal: 1,
      padding: 15,
      marginBottom: 10
    },
  btnCalcular: {
    backgroundColor: 'green',
    padding:15,
    marginTop:20,
    borderRadius: 10
  },btnAtras:{
    backgroundColor: 'transparent',
    padding:2,
    marginTop:20,
    borderRadius: 10,
    marginRight: 290
  },
  btnInfoTexto: {
    textAlign: 'center',
    color:'#FFF',
    fontSize:18,
    fontWeight: '900',
    textTransform: 'uppercase'

  },
  titulo:{
    textAlign: 'center',
    color: 'blue',
    fontSize: 20,
    marginBottom: 20,
    textTransform: 'uppercase',
    fontWeight: '600'
  }, contenedor: {
      marginTop: 32,
      paddingHorizontal: 24,
  },listadoServicios:{
    marginTop:50,
    marginHorizontal: 30,
  }, listaServicios: {
    marginTop: 20,
    textAlign: 'center',
    fontWeight:'900',
    textTransform: 'uppercase',
    color: 'blue',
    fontSize: 20,
  },btnText: {
    padding: 0
  }, imagen: {
    width: 35,
    height: 35,
}
});

export default Formulario;