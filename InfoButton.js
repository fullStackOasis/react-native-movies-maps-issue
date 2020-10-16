import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const InfoButton = ({ onPress }) => {
  return (
    <>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
		onPress={onPress}>
      <Text style={styles.buttonText} pointerEvents="none">
        ?
      </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = {
  button: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 50,
	backgroundColor: 'rgba(229,229,229,1)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4
    },
    elevation: 4,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    right: 15,
    top: 132,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 1,
    flexDirection: 'row',
    width: 50,
    height: 50,
	position: 'absolute',
  },
  buttonText: {
    fontSize: 24,
	color: 'rgba(0,0,0,1)',
    position: 'absolute'
  }
};

export default InfoButton;