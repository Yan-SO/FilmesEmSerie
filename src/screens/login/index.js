import { View, Text, TextInput, StyleSheet, useWindowDimensions, Image, StatusBar } from "react-native";
import Botao from "../../components/Botao";
import Logo from "../../../assets/Logo.png"
import ImputCampo from "../../components/ImputCampo";
import { useNavigation } from "@react-navigation/native";

export default function Login(){ 
    const navigation = useNavigation()

    const largura = useWindowDimensions().width;
    const estilos = style("#202124","#f2f2f2", largura); 

    const textlogin = ()=>{console.log(largura)}
    const textcadastro = ()=>{console.log('cadastro')}

    return(
        <View style={estilos.tela}>
            <StatusBar/>
            <Image style={estilos.logo} source={Logo}/>

            <ImputCampo titulo={'Nome de Usuario'}/>
            <ImputCampo titulo={'Senha'}/>


            <Botao texto={'Entrar'} onPress={() => 
                    navigation.reset({index: 0, routes: [{ name: 'Home' }],})
                } largura={(largura/3)}/>            
            <Botao texto={'Cadastrar'} onPress={() => navigation.navigate('Cadastro')} largura={(largura/3)-15} />            
            
        </View>
    );
}

const style = (fundo,textoCor , largura)=> (StyleSheet.create({
    tela:{
        flex:1,
        justifyContent:"space-evenly",
        alignItems:"center",
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