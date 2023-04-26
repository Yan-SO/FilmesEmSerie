import React from "react";
import { Image, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import ImagemItem from "./ImagemItem";

export default function ItemLista({ item }){
    const estilo = style();
    
    const conteudo = item.item;


    if(conteudo.tipo == 'Filme'){
        return(
            <View style={estilo.itemConteiner}>
            <ImagemItem imagem={{uri:conteudo.imagem}}/>
            <View style={estilo.conteidoConteiner}>
                <Text style={estilo.tilulo}>{conteudo.titulo}</Text>
                <Text style={estilo.texto}>Duração: {conteudo.duração}mim </Text>
                <Text style={estilo.texto}>Enteresse: {conteudo.enteresse}</Text>
                <View style={estilo.estrelasConteiler}></View>
            </View>
            </View>
        );
    }else{
        return(
            <View style={estilo.itemConteiner}>
            <ImagemItem imagem={{uri:conteudo.imagem}}/>
            <View style={estilo.conteidoConteiner}>
                <Text style={estilo.tilulo}>{conteudo.titulo}</Text>
                <Text style={estilo.texto}>temporadas: {conteudo.temporadas} </Text>
                <Text style={estilo.texto}>Ponto Atual: {conteudo.pontoAtual}</Text>
                <Text style={estilo.texto}>Enteresse: {conteudo.enteresse}</Text>
                <View style={estilo.estrelasConteiler}></View>
            </View>
            </View>
        );
    }
}

const style = ()=>(StyleSheet.create({
    itemConteiner:{
        flexDirection:'row',
        borderColor:'#fff',
        borderWidth:1,
        borderRadius:15,
        marginHorizontal:5,
        backgroundColor:'#a1a1a1',
        marginBottom:15
    },
    conteidoConteiner:{
        justifyContent:"space-between",
        margin:10
    },
    estrelasConteiler:{
        backgroundColor:'#ffb700',
        height:70,
        width:200,
    },
    tilulo:{
        flexWrap:"wrap",
        fontSize:26,
    },
    texto:{
        fontSize:16,
    },
}));