import React from "react"
import { StyleSheet, Text, ScrollView, View } from "react-native";

function UsuariosList(props) {
    return (
        <ScrollView >
        { props.array.map((usuario, index) => <View style = {styles.line} key = {index}>
                                                <View style = {styles.item}>
                                                    <Text>{usuario.nome}</Text>
                                                </View>
                                                <View style = {styles.item}>
                                                    <Text>{usuario.telefone}</Text>
                                                </View>
                                            </View>) }
        </ScrollView>
    );
};

export default UsuariosList;

const styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    item:{
        padding: 20, 
        flex: 5,
    },
})