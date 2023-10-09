import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Modal, Portal, Text, Button, PaperProvider, FAB } from 'react-native-paper';
import Formulario from './src/components/Formulario';

export default function App() {

  const [modalVisible,setModalVisible] = useState(false);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.cotenedor}>
         <Formulario
         modalVisible={modalVisible}
         setModalVisible={setModalVisible}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cotenedor: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
