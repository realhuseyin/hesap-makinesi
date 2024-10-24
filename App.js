import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [result, setResult] = useState('');

  const hesapla = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult('Error');
    }
  };
  console.log(result)
  
  const butonIslemi = (buttonValue) => {
    if (buttonValue === '=') {
      hesapla();
    } else if (buttonValue === 'C') {
      setResult('');
    } else {
      setResult(result + buttonValue);
    }
  };

  const renderButton = (value) => (
    <TouchableOpacity style={styles.button} onPress={() => butonIslemi(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.row}>
        {renderButton('1')}
        {renderButton('2')}
        {renderButton('3')}
        {renderButton('+')}
      </View>
      <View style={styles.row}>
        {renderButton('4')}
        {renderButton('5')}
        {renderButton('6')}
        {renderButton('-')}
      </View>
      <View style={styles.row}>
        {renderButton('7')}
        {renderButton('8')}
        {renderButton('9')}
        {renderButton('*')}
      </View>
      <View style={styles.row}>
        {renderButton('C')}
        {renderButton('0')}
        {renderButton('=')}
        {renderButton('/')}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  result: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 20,
    borderRadius: 10,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
