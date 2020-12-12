import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
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
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <SafeAreaView style={styles.container}>
        <InfoTreiner />
        <Chart />
        <StartTreiner/>
      </SafeAreaView>

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