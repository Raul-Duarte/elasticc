import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Header } from 'react-native-elements'
import Chart from './src/components/Chart';
import InfoTreiner from './src/components/InfoTreiner';
import StartTreiner from './src/components/StartTreiner';
// import { Container } from './styles';

const App = () => {
  return (
    <>
      <Header
        placement="left"
        backgroundColor="#e84a5b"
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'ELASTIC', style: { color: '#fff' } }}
        rightComponent={{ icon: 'arrow-left', color: '#fff' }}
      />
      <ScrollView style={styles.container}>
        <InfoTreiner />
        <Chart />
        <StartTreiner/>
      </ScrollView>

    </>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 10,

  },
})