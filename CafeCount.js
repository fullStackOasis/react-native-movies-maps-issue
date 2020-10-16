import React from 'react';
import { View, Text } from 'react-native';

const CafeCount = ({ nCafes = null }) => {
  const MAX_CAFES = 1000;
  return (
    <>
      <View style={[styles.cafeCounterContainer, !nCafes ? styles.initialContainer : nCafes <= MAX_CAFES ? styles.approveContainer : {}]}>
      <Text style={styles.counterText}>
        {!nCafes ? (
          <Text style={styles.counterText}>
            Region is limited to <Text style={styles.approve}>{MAX_CAFES} cafes</Text>
          </Text>
        ) : nCafes <= MAX_CAFES ? (
          <Text style={styles.counterText}>
            Current cafe count: <Text style={styles.approve}>{nCafes}</Text>
          </Text>
        ) : (
          <Text style={styles.counterText}>
            Decrease size: <Text style={styles.reject}>{nCafes}</Text>
          </Text>
        )}
      </Text>
	  </View>
    </>
  );
};

const styles = {
  cafeCounterContainer: {
    height: 34,
    borderRadius: 50,
    backgroundColor: '#e4e4e4',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4
    },
    elevation: 4,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    left: 15,
    top: 140,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 1,
    flexDirection: 'column',
    width: 200,
	position: 'absolute',
	padding: 20,
  },
  initialContainer: {
    width: 234,
  },
  approveContainer: {
    width: 170,
  },
  counterText: {
    fontSize: 13,
    position: 'absolute',
	fontFamily: 'gt-america-regular',
	color: 'rgba(0,0,0,1)',
	padding: 1,
  },
  approve: {
    color: '#55A74F'
  },
  reject: {
    color: '#FF0000'
  }
};

export default CafeCount;