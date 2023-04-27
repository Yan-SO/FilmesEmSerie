import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../screens/login";
import Cadastro from "../screens/cadastro";
import Home from "../screens/home";
import Lista from "../screens/lista";
import AddConteudo from "../screens/addConteudo";


const Stack = createNativeStackNavigator();

export default function Routes(){
    const cor = { corFundo:'#000000', seta:'#fff'};

    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="Lista" component={Lista} options={{title:'',
                    headerShown:true,
                    headerTintColor:cor.seta,
                    headerStyle:{
                        backgroundColor:cor.corFundo,
                    },
                    
                }}
            />
            <Stack.Screen name="Adicionar Conteudo" component={AddConteudo} />
        </Stack.Navigator>
    );
}