import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Modal from "react-native-modal";
import { Ionicons } from '@expo/vector-icons';

const LineReporterModal = (props) => (
  <Modal isVisible={props.isVisible}>
    <View style={styles.modalContent}>
      <Text>Informe o nível da fila</Text>
      <View style={styles.viewTeste}>
        <TouchableOpacity 
          style={styles.button}
          onPress={props.handleReportLine}>
            <Ionicons name="md-person" size={20} color="green" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={props.handleReportLine}>
            <Ionicons name="md-person" size={20} color="yellow" />
            <Ionicons name="md-person" size={20} color="yellow" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={props.handleReportLine}>
            <Ionicons name="md-person" size={20} color="red" />
            <Ionicons name="md-person" size={20} color="red" />
            <Ionicons name="md-person" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  viewTeste: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalContent: {
    height: '35%',
		backgroundColor: 'white',
		padding: 12,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		borderColor: 'rgba(0, 0, 0, 0.1)',
	},
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightgray',
    height: '60%',
    padding: 15,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  }
});

export default LineReporterModal;