import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import Filme from '../../../assets/Filmes.jpg';
import Serie from '../../../assets/Series.png';
import Desenhos from '../../../assets/Desenhos.jpg';
import Anime from '../../../assets/Animes.jpg';
import Botao from "../../components/Botao";
import { useNavigation } from "@react-navigation/native";


export default function Home(){
    const navigation = useNavigation();
    
    const tamanhoTela = useWindowDimensions();
    const estilo=style(tamanhoTela.width, '#003013','#FFF', '#FFF','#001207' );


    return(
        <ScrollView style={estilo.tela}>
            <StatusBar/>
            
            <View style={estilo.cabecario}>
                <Text style={estilo.nome}>  Anastor  </Text>
                <Text style={estilo.subTitolo}>  Escolha </Text>
            </View>

            <TouchableOpacity style={estilo.imageConteiner} onPress={()=> navigation.navigate('Lista')} >
                <Image style={estilo.imagem} source={Filme}/>
            </TouchableOpacity>

            <TouchableOpacity style={estilo.imageConteiner} onPress={()=> navigation.navigate('Lista')}>
                <Image style={estilo.imagem} source={Serie}/>
            </TouchableOpacity>

            <TouchableOpacity style={estilo.imageConteiner} onPress={()=> navigation.navigate('Lista')}>
            <Image style={estilo.imagem} source={Desenhos}/>
            </TouchableOpacity>

            <TouchableOpacity style={estilo.imageConteiner} onPress={()=> navigation.navigate('Lista')}>
                <Image style={estilo.imagem} source={Anime}/>
            </TouchableOpacity>

            <Botao styleTexto={estilo.styleTexto} styleBotao={estilo.styleBotao} texto={'Sair'} onPress={()=> navigation.reset({index: 0, routes: [{ name: 'Login' }],})}/>
        </ScrollView>
    );
}

const style = (width, fundo, corBorda, textoColor, fundoCabecario)=>( StyleSheet.create({
    tela:{
        backgroundColor:fundo
    },
    cabecario:{
        alignItems:"center",
        backgroundColor:fundoCabecario,
        marginBottom:10
    },
    nome:{
        color:textoColor,
        fontSize:40,
        marginHorizontal:20,
    },
    subTitolo:{
        color:textoColor,
        fontSize:20,
        marginBottom:10
    },
    imageConteiner:{
        margin:5,
    },
    imagem:{
        width:width-10,
        height:200,
        resizeMode:"cover",
        borderWidth:2,
        borderColor:corBorda
    },
    styleBotao:{
        margin:5,
        borderColor:'#ff0000'
    },
    styleTexto:{
        color:'#ff0000'
    },
}));
