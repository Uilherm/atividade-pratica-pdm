import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer}>

      <View style={styles.topContainer}>
        <Text>I'm on top!</Text>
        <Text>I'm on top!</Text>
        <Text>I'm on top!</Text>
      </View>

      <View style={styles.divider}/>

      <View style={styles.bottomContainer}>
       <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
          <Text>I'm on the bottom!</Text>
          <Text>I'm on the bottom!</Text>
        </View>
        <View style = {{flex: 9, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
          <Text>I'm on the bottom!</Text>
          <Text>I'm on the bottom!</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    flex: 35,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 65,
    backgroundColor: '#fff',
  },
  divider:{
    height: 1,
    backgroundColor: 'black',
    width: '85%',
  },
});
