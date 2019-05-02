import React from 'react';
import Modal from "react-native-modal";
import { Ionicons } from '@expo/vector-icons';
import { ModalView, ModalButton } from './styles';

const LineReporterModal = (props) => {
  
  getIconButton = (color, size) => {
    return <Ionicons name="md-person" size={size} color={color} />
  }

  return (
    <Modal 
      isVisible={props.isVisible}
      onBackdropPress={props.closeLineReporterHandler}
      >
      <ModalView>
          <ModalButton
            onPress={() => props.handleReportLine(1)}>
              {getIconButton('green', 20)}
          </ModalButton>
          <ModalButton
            onPress={() => props.handleReportLine(2)}>
              {getIconButton('yellow', 20)}
              {getIconButton('yellow', 20)}
          </ModalButton>
          <ModalButton
            onPress={() => props.handleReportLine(3)}>
              {getIconButton('red', 20)}
              {getIconButton('red', 20)}
              {getIconButton('red', 20)}
          </ModalButton>
      </ModalView>
    </Modal>
  )
};

export default LineReporterModal;