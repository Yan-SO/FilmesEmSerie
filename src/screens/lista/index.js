import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ItemLista from "../../components/ItemLista";
import { AntDesign } from '@expo/vector-icons';
import Botao from "../../components/Botao";


const itens = [
    {
        id:1,
        tipo:'Filme',
        titulo:'Pinoquio',
        imagem:'https://upload.wikimedia.org/wikipedia/en/5/5a/FF_XV_cover_art.jpg',
        duração:90,
        estrelas:5,
        enteresse:'Quero ver',
    },
    {
        id:2,
        tipo:'Filme',
        titulo:'Pinoquio',
        imagem:'https://upload.wikimedia.org/wikipedia/en/5/5a/FF_XV_cover_art.jpg',
        duração:90,
        estrelas:5,
        enteresse:'Quero ver',
    },
    {
        id:3,
        tipo: 'Serie',
        titulo:'Espartacus',
        imagem:'https://upload.wikimedia.org/wikipedia/en/5/5a/FF_XV_cover_art.jpg',
        temporadas:6,
        pontoAtual:'Completa',
        estrelas:5,
        enteresse:'Veria de novo',
    }
];



export default function Lista(){
    const estilo = style('#001207','#FFF','#000');
    const tipo = 'Filmes';

    const text =()=> {console.log('Texte')}


    const Cabecario =()=>( 
        <View style={estilo.cabecario}>
            <StatusBar />
            <Text style={estilo.nome}>{  tipo  }</Text>
            <TouchableOpacity style={estilo.iconConteiner}>
                <AntDesign name="pluscircleo" style={estilo.icon} />
            </TouchableOpacity>
        </View>
    );
    const Footer = ()=>{

        return(   
        <View style={estilo.footer}>
            <Botao largura={54} onPress={text} texto={'voltar'}/>
            <Botao largura={48} onPress={text} texto={'Próximo'}/>
        </View>
        )
    };

    return (
        <FlatList
        style={estilo.lista}
        data={itens}
        keyExtractor={item => item.id}
        ListHeaderComponent={Cabecario}
        renderItem={(item)=> <ItemLista item={item} /> }
        ListFooterComponent={Footer}
        />
    );
}

const style= (fundo,textoColor,fundoCabecario)=>(StyleSheet.create({
    lista:{
        backgroundColor:fundo,
        
    },
    cabecario:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:fundoCabecario,
        marginBottom:10
    },
    nome:{
        color:textoColor,
        fontSize:40,
        marginHorizontal:25,
        marginTop:10,
        marginBottom:25,
    },
    iconConteiner:{
        marginHorizontal:25,
    },
    icon:{
        color:textoColor,
        fontSize:50
    },
    footer:{
        marginVertical:20,
        flexDirection:"row",
        justifyContent:"space-evenly",
    }
}));
