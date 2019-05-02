import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Modal from "react-native-modal";
import { Ionicons } from '@expo/vector-icons';

const LineReporterModal = (props) => {
  
  getIconButton = (color, size) => {
    return <Ionicons name="md-person" size={size} color={color} />
  }

  return (
    <Modal 
      isVisible={props.isVisible}
      onBackdropPress={props.closeLineReporterHandler}
      >
      <View style={styles.modalContent}>
        <Text>Informe o nível da fila</Text>
        <View style={styles.viewTeste}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => props.handleReportLine(1)}>
              {getIconButton('green', 20)}
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => props.handleReportLine(2)}>
              {getIconButton('yellow', 20)}
              {getIconButton('yellow', 20)}
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => props.handleReportLine(3)}>
              {getIconButton('red', 20)}
              {getIconButton('red', 20)}
              {getIconButton('red', 20)}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
};

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