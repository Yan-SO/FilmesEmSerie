import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";



export default function Botao({  texto, onPress, largura, styleBotao, styleTexto }){
    const estilos = style("#000", '#fff','#ccc', largura); 
    return(
        <TouchableOpacity onPress={()=> onPress()} style={[estilos.conteinerBotao, styleBotao]}>
            <Text style={[estilos.texto, styleTexto]} >{texto}</Text>
        </TouchableOpacity>
    );
}

const style = (fundo, letra, borda, largura) => (StyleSheet.create({
    conteinerBotao:{
        backgroundColor:fundo,
        borderColor:borda,
        borderWidth:2,
        borderRadius:15,
        paddingVertical:15,
        paddingHorizontal:largura,
    },
    texto:{
        color:letra,
        textAlign:"center",
        fontSize:20,
    },

}));