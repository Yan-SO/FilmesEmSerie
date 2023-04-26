import { View, Text, TextInput, StyleSheet, useWindowDimensions, Image, StatusBar, ScrollView } from "react-native";
import Botao from "../../components/Botao";
import Logo from "../../../assets/Logo.png"
import ImputCampo from "../../components/ImputCampo";
import { useEffect, useState } from "react";

export default function Cadastro(){ 
    const largura = useWindowDimensions().width;
    const estilos = style("#202124", largura); 

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');
    
    const textcadastro = ()=>{console.log('cadastro')}


    return(
        <ScrollView style={estilos.tela}>
            <StatusBar/>
            <Image style={estilos.logo} source={Logo}/>

            <ImputCampo styles={estilos.imputCampo} titulo={'Nome de Usuario'} value={nome} onChangeText={(text)=> setNome(text)}/>
            <ImputCampo styles={estilos.imputCampo} titulo={'Email'} value={email} onChangeText={(text)=>setEmail(text)}/>
            <ImputCampo styles={estilos.imputCampo} titulo={'Senha'} value={senha} onChangeText={(text)=>setSenha(text)}/>
            <ImputCampo styles={estilos.imputCampo} titulo={'Confirmação da Senha'} value={confSenha} onChangeText={(text)=>setConfSenha(text)}/>
          
            <Botao texto={'Cadastrar'} onPress={textcadastro} largura={(largura/3)-15} />            
            
        </ScrollView>
    );
}

const style = (fundo, largura)=> (StyleSheet.create({
    tela:{
        flex:1,
        backgroundColor:fundo,
    },
    titulo:{
        fontSize:35,
        color:'#ffa600',
    },
    logo:{
        width:largura-10,  
        resizeMode:"contain",
    },
    imputCampo:{
        marginBottom:60
    }
}));