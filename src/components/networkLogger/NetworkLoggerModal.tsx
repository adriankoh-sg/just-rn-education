import React from 'react';
import { Button, Modal, StyleSheet, View } from 'react-native';
import NetworkLogger from 'react-native-network-logger';

interface NetworkLoggerModalProps {
  visible: boolean;
  onClose: () => void;
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(241, 238, 238, 0.5)',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

const NetworkLoggerModal: React.FC<NetworkLoggerModalProps> = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
      presentationStyle="pageSheet"
    >
      <View style={styles.modalContainer}>
        <Button title="Close" onPress={onClose} />
        <NetworkLogger />
      </View>
    </Modal>
  );
};

export default NetworkLoggerModal;
