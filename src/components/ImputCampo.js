import React from "react";
import { StyleSheet, Text, TextInput, View, useWindowDimensions } from "react-native";

export default function ImputCampo({ titulo, value, onChangeText, styles,keyboardType  }){
    const largura = useWindowDimensions().width;
    const estilos = style("#f2f2f2", largura); 

    return(
        <View style={[estilos.campoConteiner, styles]}>
            <Text style={[estilos.texto]}> {titulo} </Text>
            <TextInput keyboardType={keyboardType} style={estilos.textInput} value={value} onChangeText={(texto)=> onChangeText(texto)}/>
        </View>
    );
}



const style = (textoCor , largura)=> (StyleSheet.create({
    campoConteiner:{
        alignItems:"center",
    },
    texto:{
        color:textoCor,
        fontSize:25
    },
    textInput:{
        width: largura -50,
        backgroundColor:"#f2f2f2",
        paddingHorizontal:16,
        paddingVertical:8,
        borderRadius:15,
        borderWidth:2,
        borderColor:'#ccc'
    },
}));