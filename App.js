import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "./components/CustomButton";
import { cadastroTitleText, cadastroNomeText, cadastroTelefoneText, cadastrarButtonText} from "./labels";
import { useState } from "react";
import UsuariosList from './components/UsuariosList'

export default function App() {
  const [inputNome,setInputNome] = useState('');
  const [inputTelefone,setInputTelefone] = useState('');
  const [usuarios,setUsuarios] = useState([]);

  function inputNomeHandler(inputText){
    setInputNome(inputText)
  }

  function inputTelefoneHandler(inputText){
    setInputTelefone(inputText)
  }

  function addUser(){
    const usuario = {nome: inputNome, telefone: inputTelefone}
    setUsuarios([...usuarios,usuario])
  }

  return (
    <View style={styles.mainContainer}>

      <View style={styles.topContainer}>
        <Text style = {styles.title}>{cadastroTitleText}</Text>
        <View style={styles.inputLine}>
          <View style = {{flex: 25}}>
            <Text style = {styles.text}>{cadastroNomeText}</Text>
          </View>
          <View style = {{flex: 75}}>
            <TextInput style = {styles.input} onChangeText={inputNomeHandler}></TextInput>
          </View>
        </View>
        <View style={styles.inputLine}>
          <View style = {{flex: 25}}>
            <Text style = {styles.text}>{cadastroTelefoneText}</Text>
          </View>
          <View style = {{flex: 75}}>
            <TextInput style = {styles.input} onChangeText={inputTelefoneHandler}></TextInput>
          </View>
        </View>
        <View style={styles.button}>
          <View style = {{flex: 0.75}}>
            <CustomButton text = {cadastrarButtonText} onPress={addUser}></CustomButton>
          </View>
        </View>
      </View>
      
      <View style={styles.divider} />

      <View style={styles.bottomContainer}>
        <View style = {{flexDirection: 'row', justifyContent: 'space-evenly', flex: 13}}>
          <View style = {{padding: 20, flex: 5}}>
            <Text style = {styles.text}>{cadastroNomeText}</Text>
          </View>
          <View style = {{padding: 20, flex: 5}}>
            <Text style = {styles.text}>{cadastroTelefoneText}</Text>
          </View>
        </View>
        <View style = {{flex: 87}}>
          <UsuariosList array = {usuarios}></UsuariosList>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
  },
  topContainer: {
    flex: 35,
    justifyContent: "space-evenly",
  },
  bottomContainer: {
    flex: 65,
  },
  divider: {
    height: 1,
    backgroundColor: "black",
    width: "100%",
    alignSelf: 'center',
  },
  input:{
    borderWidth: 1,
    padding: 10,
  },
  inputLine:{
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  button:{
    flexDirection: 'row', 
    justifyContent: 'flex-end'
  },
  text:{
    fontSize: 15,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 20
  },
});
