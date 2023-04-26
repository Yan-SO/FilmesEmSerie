import React from "react";
import { Image, StyleSheet, View } from "react-native";


export default function ImagemItem({imagem}){
    const estilo = style('#202124');

    return (
        
            <View style={estilo.imagemConteire}>
                <Image style={estilo.imagem} source={imagem}/>
            </View>
        
    );
}

const style = ( fundoImagem)=>(StyleSheet.create({
    
    imagemConteire:{
        alignItems:"center",
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15,
        height:235,
        width:165,
        backgroundColor:fundoImagem,
    },
    imagem:{
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15,
        height:235,
        width:160,
        resizeMode:"cover",
    },

}));