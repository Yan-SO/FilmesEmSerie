import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from "react-native";
import ImputCampo from "../../components/ImputCampo";
import { useState } from "react";
import ImagemItem from "../../components/ImagemItem";
import Botao from "../../components/Botao";


export default function AddConteudo(){
    const largura = useWindowDimensions().width;
    const estilo = style('#202124', '#fff',largura);

    const tipo = 'Serie'; //'Filme';

    const [titulo, setTitulo] = useState('');
    const [duracao, setDuracao] = useState('');
    const [enteresse, setEnteresse] = useState('');
    const [temporadas, setTemporadas] = useState('');
    const [pontoAtual, setPontoAtual] = useState('');
    const [imagemText, setImagemText] = useState('URL da imagem aqui!');
    const [imagemAtualizada, setImagemAtualizada] = useState('URL da imagem aqui!');


    if(tipo == 'Filme'){

        return(
            <ScrollView style={estilo.tela}>
            
            <ImputCampo styles={estilo.imputCampo} titulo={'Titulo'} value={titulo} onChangeText={(texto)=>setTitulo(texto)}/>
            <ImputCampo styles={estilo.imputCampo} keyboardType={"numeric"} titulo={'Duração'} value={duracao} onChangeText={(texto)=>setDuracao(texto)}/>
            <ImputCampo styles={estilo.imputCampo} titulo={'Enteresse'} value={enteresse} onChangeText={(texto)=>setEnteresse(texto)}/>
            <View style={estilo.itemConteiner}>
                <ImagemItem imagem={{uri: imagemAtualizada}}/>
                <View>
                    <TextInput keyboardType="url" multiline={true} value={imagemText} onChangeText={(texto)=>setImagemText(texto)} style={estilo.imputImagemTxt} />
                    <TouchableOpacity style={estilo.botao} onPress={()=> setImagemAtualizada(imagemText)} >
                        <Text style={estilo.textoBotao}> Verificar a URL </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        );
    }else{
        return(
            <ScrollView style={estilo.tela}>
            
            <ImputCampo styles={estilo.imputCampo} titulo={'Titulo'} value={titulo} onChangeText={(texto)=>setTitulo(texto)}/>
            <ImputCampo styles={estilo.imputCampo} keyboardType={"numeric"} titulo={'Temporadas'} value={temporadas} onChangeText={(texto)=>setTemporadas(texto)}/>
            <ImputCampo styles={estilo.imputCampo} titulo={'Enteresse'} value={enteresse} onChangeText={(texto)=>setEnteresse(texto)}/>
            <ImputCampo styles={estilo.imputCampo} titulo={'Ponto Atual no Conteúdo'} value={pontoAtual} onChangeText={(texto)=>setPontoAtual(texto)}/>
            <View style={estilo.itemConteiner}>
                <ImagemItem imagem={{uri: imagemAtualizada}}/>
                <View>
                    <TextInput keyboardType="url" multiline={true} value={imagemText} onChangeText={(texto)=>setImagemText(texto)} style={estilo.imputImagemTxt} />
                    <TouchableOpacity style={estilo.botao} onPress={()=> setImagemAtualizada(imagemText)} >
                        <Text style={estilo.textoBotao}> Verificar a URL </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Botao styleBotao={estilo.styleBotao} texto={'Salvar o Conteúdo'}  onPress={()=> console.log('salvado')}/>
        </ScrollView>
        );
    }
}


const style = (fundo, corTextoBotao,largura)=>(StyleSheet.create({
    tela:{
        paddingTop:40,
        backgroundColor:fundo,
    },
    itemConteiner:{
        flexDirection:'row',
        borderColor:'#fff',
        borderWidth:1,
        borderRadius:15,
        marginHorizontal:5,
        backgroundColor:'#a1a1a1',
        marginBottom:15
    },
    imputCampo:{
        marginBottom:50
    },
    imputImagemTxt:{
        height:150,
        backgroundColor:'#f2f2f2',
        borderTopRightRadius:15,
        width:largura-177,
        padding:15,
    },
    botao:{
        alignItems:"center",
        justifyContent:"center",
        height:84,
        backgroundColor:'#000',
        borderBottomRightRadius:15
    },
    textoBotao:{
        color:corTextoBotao,
        fontSize:25
    },
    styleBotao:{
        marginBottom:60
    }
}));