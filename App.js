import { StyleSheet, Text, SafeAreaView,StatusBar } from 'react-native'
import React from 'react'

import TabNav from './Src/TabNav'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TabNav/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
})