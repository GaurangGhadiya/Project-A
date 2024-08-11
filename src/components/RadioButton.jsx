import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RadioButton = ({ label, value, selected, onPress }) => {
  console.log("ca;ll")
  return (
    <TouchableOpacity onPress={onPress} style={styles.radioButtonContainer}>
      <View style={[styles.radioButton, selected && styles.radioButtonSelected]}>
        {selected && <Icon name="check" size={16} color="white" />}
      </View>
      {/* <Text style={styles.radioButtonText}>{label}</Text> */}
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 10,
  },
  radioButton: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ff4c3b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    backgroundColor: '#ff4c3b',
  },
  radioButtonText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default RadioButton;
